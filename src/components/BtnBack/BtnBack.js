import { FcUndo } from 'react-icons/fc';

import { Link } from 'react-router-dom';

export const BtnBack = location => {
  const backLink = location.location;

  return (
    <button type="button">
      <Link to={backLink}>
        <FcUndo /> <span> Go back </span>
      </Link>
    </button>
  );
};
