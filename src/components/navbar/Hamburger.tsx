type HamburgerButtonProps = {
  onClick: () => void;
  label: string;
};

export function HamburgerButton(props: HamburgerButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer focus-visible:ring-8 ring-accent group border-primary focus:ring-2 focus:ring-opacity-50 focus:border-accent focus:ring-vaporyellow-100 border-2 h-5 w-5 p-4 box-content flex flex-col justify-between rounded-full"
    >
      <span className="sr-only">{props.label}</span>
      <span className="h-0.5 w-full group-focus:bg-accent bg-primary rounded-full"></span>
      <span className="h-0.5 w-full group-focus:bg-accent bg-primary rounded-full"></span>
      <span className="h-0.5 w-full group-focus:bg-accent bg-primary rounded-full"></span>
    </button>
  );
}

export function CloseButton(
  props: HamburgerButtonProps & { innerRef?: React.Ref<HTMLButtonElement> }
) {
  return (
    <button
      onClick={props.onClick}
      ref={props.innerRef}
      className="cursor-pointer focus-visible:ring-8 ring-accent group relative border-primary-content focus:border-primary-content focus:ring-2 focus:ring-opacity-50 focus:ring-accent border-2 h-5 w-5 p-4 box-content flex flex-nowrap flex-col justify-between rounded-full bg-vaporpink-900"
    >
      <span className="sr-only">{props.label}</span>
      <span className="absolute top-1/2 h-0.5 w-5 transform rotate-45 group-focus:bg-vaporviolet-900 bg-primary-content rounded-full"></span>
      <span className="absolute top-1/2 h-0.5 w-5 transform -rotate-45 group-focus:bg-vaporviolet-900 bg-primary-content rounded-full"></span>
    </button>
  );
}
