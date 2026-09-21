const palco = document.querySelector('#palco');
const codigo = document.querySelector('#codigo');
const controles = {
  direction: document.querySelector('#direction'),
  justify: document.querySelector('#justify'),
  align: document.querySelector('#align'),
  wrap: document.querySelector('#wrap'),
  gap: document.querySelector('#gap'),
  height: document.querySelector('#height')
};

function atualizar() {
  palco.style.flexDirection = controles.direction.value;
  palco.style.justifyContent = controles.justify.value;
  palco.style.alignItems = controles.align.value;
  palco.style.flexWrap = controles.wrap.value;
  palco.style.gap = `${controles.gap.value}px`;
  palco.style.height = `${controles.height.value}px`;
  document.querySelector('#gapValue').value = `${controles.gap.value}px`;
  document.querySelector('#heightValue').value = `${controles.height.value}px`;

  codigo.textContent = `.container {
  display: flex;
  flex-direction: ${controles.direction.value};
  justify-content: ${controles.justify.value};
  align-items: ${controles.align.value};
  flex-wrap: ${controles.wrap.value};
  gap: ${controles.gap.value}px;
  height: ${controles.height.value}px;
}`;
}

Object.values(controles).forEach(controle => controle.addEventListener('input', atualizar));

document.querySelector('#resetar').addEventListener('click', () => {
  controles.direction.value = 'row';
  controles.justify.value = 'flex-start';
  controles.align.value = 'stretch';
  controles.wrap.value = 'nowrap';
  controles.gap.value = '16';
  controles.height.value = '320';
  atualizar();
});

document.querySelector('#copiar').addEventListener('click', async event => {
  await navigator.clipboard.writeText(codigo.textContent);
  event.currentTarget.textContent = 'Copiado!';
  setTimeout(() => { event.currentTarget.textContent = 'Copiar'; }, 1200);
});

atualizar();

