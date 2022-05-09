import './ListView.css';

function ListView({children}) {
  return (
      <div className='list-wrapper'>
          {children}
      </div>
  );
}

export default ListView;
