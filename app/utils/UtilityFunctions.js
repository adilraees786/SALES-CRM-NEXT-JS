
export const formatNumber = (value) => {
    if (value) return `${value}`
    if (!value) return `0`
}

export const formatAmount = (value) => {
    if (value) return `৳${value}`
    if (!value) return `৳0.00`
}

export const formatPercentage = (value) => {
    if (value) return `${value}%`
    if (!value) return `0.00%`
}