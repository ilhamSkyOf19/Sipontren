export const navigasi = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Contact' },
]



// header dashboard 
export const headerDashboard = (text) => {
    const result = text.split('/')[2].split('-').join(' ');
    return result
}
