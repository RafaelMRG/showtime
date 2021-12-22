const btnPesquisa = $("#btnPesquisa")
const campoPesquisa = $("#campoPesquisa")

btnPesquisa.click((el) => {
	console.log(`campo btnPesquisa clicado, conteudo do input é ${campoPesquisa.val()}`)
})

