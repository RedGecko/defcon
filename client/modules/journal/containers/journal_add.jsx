import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

import JournalAdd from '../components/journal_editor.jsx';
import Loader from '/client/modules/core/components/loader/loader.jsx';

export const composer = ({ context, clearErrors, incidentId}, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('JOURNAL.SAVE_ERROR');

  onData(null, { error, incidentId });
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.journal.create,
  update: actions.journal.update,
  clearErrors: actions.journal.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(JournalAdd);
