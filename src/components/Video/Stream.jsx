import React, { Fragment } from "react";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  const AddedStream = () => (
    <div>
      <ReactPlayer
        className={classes.player}
        url={`https://www.twitch.tv/${props.url}`}
        width="100%"
        theme="dark"
        playing="true"
      />
    </div>
  );

  return (
    <Fragment>
      {Array(props.addedStream).fill(<AddedStream />)}
      {/* <div className={classes.wrapper}>
        <ReactPlayer
          className={classes.player}
          url={`https://www.twitch.tv/${props.url}`}
          width="100%"
        />
      </div>
      <div className={classes.wrapper2}>
        <ReactPlayer
          className={classes.player}
          url={`https://www.twitch.tv/${props.url}`}
          width="100%"
          theme="dark"
          playing="true"
        />
      </div> */}
    </Fragment>
  );
};

export default Stream;

// Get a hook function
// const {useState, useCallback} = React;

// // The added element component
// const AddedElement = () => <div><input placeholder='text box' /></div>

// // The "app" component
// const Example = () => {
//   const [count, setCount] = useState(0);

//   return <div>
//     <button onClick={() => setCount(count + 1)}>
//       Click me
//     </button>
//     { Array(count).fill(<AddedElement />) }
//   </div>
// };
