import { toRefs, reactive, watchEffect } from "vue"

export default function (url: any, options: any = {}) {
    const state = reactive({
        response: null,
        error: null,
        fetching: false
    })

    // @ts-ignore
    watchEffect(() => {
        const fetchData = async () => {
            try {
                state.error = null
                state.fetching = true
                const res = await fetch(url, options)
                if (!res.ok) {
                    throw res
                } else {
                    const json = await res.json()
                    console.log(json)
                    state.response = json
                }
            } catch (errors) {
                // @ts-ignore
                state.error = errors.status + " " + errors.statusText
            } finally {
                state.fetching = false
            }
        }
        fetchData()
    })

    return { ...toRefs(state) }
}
