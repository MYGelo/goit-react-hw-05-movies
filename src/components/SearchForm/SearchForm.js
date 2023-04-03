// export const SearchForm = () => {
//   let search = '';
//   const handleChange = e => {
//     search = e.target.value.toLowerCase();
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (search === '') {
//       alert('enter movie name');
//     }

//     setSearchParams({ querry: search });
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search movies"
//         onChange={handleChange}
//       ></input>
//       <button type="submit"> Search </button>
//     </form>
//   );
// };
