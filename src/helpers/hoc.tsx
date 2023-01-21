export const hoc =
  <T extends JSX.IntrinsicAttributes>(callback: (props: any) => T) =>
  (Component: any) =>
  (params: any) => {
    const props = callback(params);
    return <Component {...props} />;
  };
