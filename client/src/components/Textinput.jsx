// import PropTypes from "prop-types";

// export default function Textinput({ taskname }) {
//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={taskname}
//         placeholder="Type here"
//         className="input input-bordered input-sm w-full max-w-xs"
//       />
//     </div>
//   );
// }

// Textinput.prototype = {
//   taskname: PropTypes.string,
// };

export default function Textinput({ taskname }) {
  return (
    <div>
      <input
        type="text"
        name="name"
        // value={taskname}
        defaultValue={taskname}
        placeholder="Type here"
        className="input input-bordered input-sm w-full max-w-xs"
      />
    </div>
  );
}
