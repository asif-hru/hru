 document.addEventListener('selectionchange', updateToolbarState); // moved outside

    function format(command, button) {
      document.execCommand(command, false, null);

      const modal = button.closest('.modal'); // scope to the current modal

      if (['justifyLeft', 'justifyCenter', 'justifyRight'].includes(command)) {
        const buttons = modal.querySelectorAll('.editor-alignment');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        return;
      }

      // Toggle active for formatting
      button.classList.toggle('active');
    }

    function updateToolbarState() {
      const activeModal = document.querySelector('.modal.show'); // current open modal
      if (!activeModal) return;

      const states = {
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        insertOrderedList: document.queryCommandState('insertOrderedList'),
        insertUnorderedList: document.queryCommandState('insertUnorderedList'),
        justifyLeft: document.queryCommandState('justifyLeft'),
        justifyCenter: document.queryCommandState('justifyCenter'),
        justifyRight: document.queryCommandState('justifyRight'),
      };

      for (const [command, isActive] of Object.entries(states)) {
        const button = activeModal.querySelector(`button[data-command="${command}"]`);
        if (button) {
          button.classList.toggle('active', isActive);
        }
      }
    }


    function closeModal(btn) {
      const modal = btn.closest('.modal');
      const buttons = modal.querySelectorAll('.editor-toolbar button');
      buttons.forEach(btn => btn.classList.remove('active'));
    }

    function cancelNote(btn) {
      const modal = btn.closest('.modal'); // find the closest modal to this button
      const editor = modal.querySelector('.editor');
      editor.innerHTML = '';

      closeModal(btn); // pass same button context
      alert('Note cancelled.');
    }

    function saveNote(btn) {
      const modal = btn.closest('.modal');
      const date = modal.querySelector('.visit-date').value;
      const time = modal.querySelector('.visit-time').value;
      const content = modal.querySelector('.editor').innerHTML;

      console.log('Saved Note:', { date, time, content });

      alert('Note saved successfully!');
    }

    function changeFontSize(selectElement) {
      const size = selectElement.value;
      if (size) {
        document.execCommand('fontSize', false, size);
      }
    }