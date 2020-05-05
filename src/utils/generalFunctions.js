export const createSlug = (string) => {
    return string
           .toLowerCase()
           .replace(/\s+/g, '-')
           .replace(/^-+/, '')
           .replace(/-+$/, '')

}

export const removeSlug = (string) => {
    return string
        .replace(/-+/g, ' ')
    
}