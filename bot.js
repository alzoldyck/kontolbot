const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya kontolbot. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia}, hobi kamu apa ya?`,
    `wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `Ohhh ${data?.ngntot}, Pernah ngentot gak?`,
    `Ohhh ${data?.png}, Gimana Rasanya ngentot, apakah Enak?`,
    `Ohhh ${data?.bkp}, Ketika kamu nonton film bokep, gaya apa yang kamu sukai?`,
    `ohhh ${data?.pacar}, ya udah kalau gitu. udahan yah? karna mukamu kayak kontol`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ ngntot: jawaban.value })
  } else if (init === 5) {
    botDelay({ png: jawaban.value })
  } else if (init === 6) {
    botDelay({ bkp: jawaban.value })
  } else if (init === 7) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 8) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke deabot 😉, kali-kali kita main ${usersData[2]} bareng ya!`
  jawaban.value = "siap thanks juga!"
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
  )
  window.location.reload()
}
