import { computed } from "vue"

const useCutTextWithDots = (string: string) => {
    const cutTextWithDots = computed(() => {
        if (string.length > 945) {
            return string.slice(0, 945) + "..."
        }
        return string
    })
    return { cutTextWithDots }
}

export default useCutTextWithDots
