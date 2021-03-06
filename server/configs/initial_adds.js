import {Incidents,Journal} from '/lib/collections';

export default() => {
  if (!Incidents.findOne()) {
      Incidents.insert({
          createdAt: new Date(),
          name: 'Test Event 1',
          location: 'FooBar'
      });

      var incident = Incidents.findOne();
      Journal.insert({
          text: 'Ich bin Globi und wer bist du?',
          sender: 'Globi',
          receiver: 'Walterli',
          createdAt: new Date(),
          incident: incident._id
      });

      Journal.insert({
          text: 'Moritz fragt Max wie das Wetter ist.',
          sender: 'Moritz',
          receiver: 'Max',
          createdAt: new Date(),
          incident: incident._id
      });

      Journal.insert({
          text: 'Max sagt Moritz, dass hier alles gut ist.',
          sender: 'Max',
          receiver: 'Moritz',
          createdAt: new Date(),
          incident: incident._id
      });

  }
};
