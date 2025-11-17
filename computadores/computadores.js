let msgCookies = document.getElementById('cookies-msg')

function aceito(){
	localStorage.lgpd = 'sim'

	msgCookies.classList.remove('mostrar')
}

function naoAceito(){
	localStorage.lgpd = 'nao'

	msgCookies.classList.remove('mostrar')

	console.warn("Usuário não aceitou os cookies")
}

function maisTarde(){
	localStorage.lgpd = 'tarde'

	msgCookies.classList.remove('mostrar')

	setTimeout(function(){
		if (localStorage.lgpd === 'tarde'){
			msgCookies.classList.add('mostrar')
		}
	}, 10000)
}

if(localStorage.lgpd == 'sim' || localStorage.lgpd == 'nao'){
	msgCookies.classList.remove('mostrar')
}
else{
	msgCookies.classList.add('mostrar')
}