const Loading = (props) => {
  return (
    <div className={props.center ? "loading loading-center" : "loading"}></div>
  );
};

export default Loading;
