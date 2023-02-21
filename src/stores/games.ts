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
        if (filterValue.value === "" || filterValue.value === "name") {
            // @ts-ignore
            return [...gamesData.value].sort((game1, game2) => game1[filterValue.value]?.toString().localeCompare(game2[filterValue.value].toString()))
        }
        // eslint-disable-next-line no-constant-condition
        if (filterValue.value === "time" || filterValue.value === "person" || filterValue.value === "ageLimit") {
            const compareNumeric = (a: any, b: any) => {
                if (+a[filterValue.value] > +b[filterValue.value]) return 1
                if (+a[filterValue.value] === +b[filterValue.value]) return 0
                if (+a[filterValue.value] < +b[filterValue.value]) return -1
            }
            // @ts-ignore
            return [...gamesData.value].sort(compareNumeric)
        }
    })

    const filteredAndSelectedGamesData = computed(() => {
        // @ts-ignore
        return filteredGamesData.value.filter((game) => {
            // @ts-ignore
            if (game.name) {
                // @ts-ignore
                return game.name.toLowerCase().includes(filterText.value.toLowerCase())
            } else {
                return filteredGamesData
            }
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
