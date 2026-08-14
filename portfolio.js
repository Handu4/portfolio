function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.doc-panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('panel-' + tab).classList.add('on');
}


window.addEventListener('beforeprint', e => { e.preventDefault(); window.stop(); });
