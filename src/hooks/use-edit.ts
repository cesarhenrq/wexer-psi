import { useState } from 'react';

const useEdit = () => {
  const [editingState, setEditingState] = useState({
    isSessionEditing: false,
    isPertinentFactEditing: false,
    isAttachmentEditing: false,
    isServiceEditing: false,
  });

  return { editingState, setEditingState };
};

export default useEdit;
