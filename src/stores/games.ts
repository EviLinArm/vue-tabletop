import { computed, ref } from "vue"
import { defineStore } from "pinia"
import URL from "@/api"

const useGamesStore = defineStore("games", () => {
    const loader = ref(false)
    const gamesData = ref([])
    const filterText = ref("")
    const filterValue = ref("")

    const getGamesData = async () => {
        loader.value = true
        const res = await fetch(`${URL}`)
        gamesData.value = await res.json()
        loader.value = false
    }

    const setFilterText = (text: string) => {
        filterText.value = text
    }

    const setFilterValue = (value: any) => {
        filterValue.value = value
    }

    // eslint-disable-next-line vue/return-in-computed-property
    const filteredGamesData = computed(() => {
        // eslint-disable-next-line no-constant-condition
        if (filterValue.value === "") {
            return [...gamesData.value]
        }
        if (filterValue.value === "" || filterValue.value === "name") {
            // @ts-ignore
            // return [...gamesData.value].sort((game1, game2) => game1[filterValue.value]?.toString().localeCompare(game2[filterValue.value].toString()))
            return [...gamesData.value].sort((game1, game2) => {
                const nameA = game1.name.toUpperCase()
                const nameB = game2.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            })
        }
        // eslint-disable-next-line no-constant-condition
        if (filterValue.value === "time" || filterValue.value === "person" || filterValue.value === "ageLimit") {
            const compareNumeric = (a: any, b: any) => {
                const nameA = +a[filterValue.value]
                const nameB = +b[filterValue.value]
                if (nameA > nameB) return 1
                if (nameA === nameB) return 0
                if (nameA < nameB) return -1
            }
            // @ts-ignore
            return [...gamesData.value].sort(compareNumeric)
        }
    })

    const filteredAndSelectedGamesData = computed(() => {
        // @ts-ignore
        return filteredGamesData.value.filter((game) => {
            // @ts-ignore
            return game?.name.toLowerCase().includes(filterText.value.toLowerCase())
        })
    })

    return {
        loader,
        gamesData,
        getGamesData,
        filteredGamesData,
        filterText,
        setFilterText,
        filterValue,
        setFilterValue,
        filteredAndSelectedGamesData
    }
})

export default useGamesStore
