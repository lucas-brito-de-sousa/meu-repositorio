// supabase-loader.js - Para GitHub Pages
fetch('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2')
  .then(response => response.text())
  .then(scriptContent => {
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.head.appendChild(script);
    
    // Agora carrega o popup.js
    const popupScript = document.createElement('script');
    popupScript.src = 'popup.js';
    document.head.appendChild(popupScript);
  })
  .catch(error => {
    console.error('Erro ao carregar Supabase:', error);
  });
