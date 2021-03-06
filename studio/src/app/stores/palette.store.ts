import {createStore} from '@stencil/store';

import {set} from 'idb-keyval';

import {DeckdeckgoPalette} from '@deckdeckgo/color';

interface PaletteStore {
  palette: DeckdeckgoPalette[];
}

const {state, onChange} = createStore<PaletteStore>({
  palette: [],
});

onChange('palette', (palette) => {
  set('deckdeckgo_palette', palette).catch((err) => {
    console.error('Failed to update IDB with new palette', err);
  });
});
export default {state, onChange};
