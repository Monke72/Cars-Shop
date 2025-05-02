interface ITitle {
  name: string;
  link?: boolean;
  classnameText?: string;
}

const Title = ({ name, classnameText = "" }: ITitle) => {
  return (
    <div className={`title__header`}>
      <h3 className={`title__header-name ${classnameText}`}>{name}</h3>
    </div>
  );
};

export default Title;
