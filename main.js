const input = document.getElementById('fileInput');
const list = document.getElementById('fileList');
const grid = document.getElementById('previewGrid');

input.addEventListener('change', () => {
    list.innerHTML = '';
    grid.innerHTML = '';

    const files = input.files;
    if (!files || files.length === 0) return;

    for (const f of files) {
        const li = document.createElement ('li');
        li.textContent = f.name;
        list.appendChild(li);

        if (f.type && f.type.startsWith('image/')) {
            const url = URL.createObjectURL(f);
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = url;
            img.alt = f.name;

            img.onload = () => {URL, revokeObjectURL(url)};

            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = f.name;

            card.appendChild(img);
            card.appendChild(caption);
            grid.appendChild(card);
        }
    }
});