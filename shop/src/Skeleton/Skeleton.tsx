const Skeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="skeleton-card" />
      ))}
    </>
  );
};
export default Skeleton;
