import React, { useState } from 'react';

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle('');
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary rounder-pill my-3" type="submit">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
