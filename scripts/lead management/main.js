document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.lead-card');
  const columns = document.querySelectorAll('.kanban-cards');

  cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  });

  columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
  });

  let draggedCard = null;

  function dragStart(e) {
    draggedCard = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  }

  function dragEnd(e) {
    this.classList.remove('dragging');
  }

  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function drop(e) {
    e.preventDefault();
    if (draggedCard && this !== draggedCard.parentElement) {
      this.appendChild(draggedCard);
    }
  }
});
