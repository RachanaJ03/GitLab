// Simple interactive behavior for the sample project
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('greetBtn');
  const out = document.getElementById('greetResult');
  if(btn && out){
    btn.addEventListener('click', ()=>{
      const name = prompt('Enter your name (optional)') || 'friend';
      const msg = `Hello, ${name}! Welcome to the sample project.`;
      out.textContent = msg;
      console.log(msg);
    });
  }
});
