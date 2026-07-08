import type { ReactNode } from 'react';

interface LayoutSlotsProps {
  header?: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
}

function LayoutSlots({
  header = <p>Header por defecto</p>,
  main,
  footer = <p>Footer por defecto</p>,
}: LayoutSlotsProps) {
  return (
    <div className="layout-slots">
      <header className="layout-slots__header">{header}</header>
      <main className="layout-slots__main">{main}</main>
      <footer className="layout-slots__footer">{footer}</footer>
    </div>
  );
}

export default LayoutSlots;