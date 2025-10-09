// get
export const loadInstall = () => {
  try {
    const data = localStorage.getItem('install')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = app => {
  const install = loadInstall ()

  try {
    const isDuplicate = install.some(a => a.id === app.id)
    if (isDuplicate) return alert('Already added in wishlist')
    const updatedInstall = [...install, app]
    localStorage.setItem('install', JSON.stringify(updatedInstall))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromInstall = id => {
  const install = loadInstall()
  try {
    const updatedInstall = install.filter(a => a.id !== id)
    localStorage.setItem('install', JSON.stringify(updatedInstall))
  } catch (err) {
    console.log(err)
  }
}