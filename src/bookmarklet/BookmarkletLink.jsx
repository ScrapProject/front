import React, { useState, useEffect } from 'react';

function BookmarkletLink() {
  const [bookmarkletCode, setBookmarkletCode] = useState('');

  useEffect(() => {
    fetch('script/bookmarklet.js')
      .then(response => response.text())
      .then(scriptContent => {
        const minifiedScript = scriptContent
          .replace(/\n/g, '')
          .replace(/\s+/g, ' ')
          .trim();

        const bookmarklet = `javascript:(function(){${minifiedScript}})();`;

        setBookmarkletCode(bookmarklet);
      });
  }, []);

  return (
    <div>
      <p>Drag and drop the link to your bookmarks bar, go to a site, and click the link:</p>
      {bookmarkletCode && (
        <a href={bookmarkletCode}>le lien</a>
      )}
    </div>
  );
}

export default BookmarkletLink;
