document.addEventListener('DOMContentLoaded', function () {
    // Füge einen Event-Listener für den Link hinzu
    document.querySelectorAll('.popover-trigger').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Prüfen, ob das Popover bereits existiert
            let existingPopover = document.querySelector('#custom-popover');
            if (existingPopover) {
                existingPopover.remove(); // Entferne vorheriges Popover
            }

            // Erstelle das Popover-Element
            let popover = document.createElement('div');
            popover.id = 'custom-popover';
            popover.style.position = 'fixed';
            popover.style.bottom = '20px';
            popover.style.right = '20px';
            popover.style.width = '300px';
            popover.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)';
            popover.style.border = '1px solid #ddd';
            popover.style.borderRadius = '8px';
            popover.style.backgroundColor = '#fff';
            popover.style.zIndex = '9999';
            popover.style.padding = '10px';

            // Füge den Inhalt hinzu
            popover.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 10px;">Popover Title</div>
                <div>Ich bin ein Popover</div>
                <button id="close-popover" style="margin-top: 10px; padding: 5px 10px; border: none; background-color: #007bff; color: white; border-radius: 5px; cursor: pointer;">
                    Schließen
                </button>
            `;

            // Füge das Popover zum Body hinzu
            document.body.appendChild(popover);

            // Event-Listener für den Schließen-Button
            document.getElementById('close-popover').addEventListener('click', function () {
                popover.remove();
            });
        });
    });
});