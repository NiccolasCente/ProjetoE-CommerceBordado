function abrirWhatsApp() {
            var numeroTelefone = "5511934747011"; 
            var urlWhatsApp = "https://wa.me/" + numeroTelefone;
            window.open(urlWhatsApp, "_blank");
           }

function abrirWhatsApp2() {
            var numeroTelefone = "5511940070057"; 
            var urlWhatsApp = "https://wa.me/" + numeroTelefone;
            window.open(urlWhatsApp, "_blank");
           }           
        

//*Barra de Pesquisa*/
           document.getElementById('search-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            
            const userInput = document.querySelector('input[type="search"]').value.toLowerCase();
          
            if (userInput.includes('toalha')) {
              window.location.href = 'result_toalha.html'; // Redireciona para a página de resultados de toalha
            } else if (userInput.includes('pano de prato') || userInput.includes('pano')) {
              window.location.href = 'result_pano_de_prato.html'; // Redireciona para a página de resultados de pano de prato
            } else if (userInput.includes('bordado')) {
              window.location.href = 'result_bordado.html'; // Redireciona para a página de resultados de bordado
            } else {
              window.location.href = 'result_nao_encontrado.html'; // Redireciona para a página de resultados não encontrados
            }
          });

         