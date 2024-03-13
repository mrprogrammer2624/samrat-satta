import { Dialog } from "@headlessui/react";

export const SSModal = ({ children, open, close, title }) => {
  return (
    <Dialog open={open} onClose={close}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{children}</Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};
