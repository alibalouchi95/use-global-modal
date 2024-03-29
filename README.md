# global-modal

Wonderfully lightweight package for using modals in a react app.

## Instalation

using npm:

```
npm install global-modal
```

using yarn:

```
yarn add global-modal
```

## usage

The ModalProvider component should wrap the whole app as children. (recommended use is as instant father of the main <App /> component)

## example

*in the `src/index.tsx`*

```
import { ModalProvider } from  'global-modal';
...
root.render(
 <React.StrictMode>
  <ModalProvider>
   <App  />
  </ModalProvider>
 </React.StrictMode>
);
...
```

*in the `src/ComponentWithModal.tsx`*

```
const {show, close, visible} = useModal(<ModalComponent />)
```

the `useModal` hook gets `<ModalComponent />` as input and returns two methods (show and close) and one value (visible) as output:

- `<ModalComponent />`: This is a custom component which you want to appear in the modal.
- `show`: this method can get two values as inputs:
  - The first one is the modal component (with type `JSX.Element`) for showing the modal with different component than the default one
  - The second one is an object (with type `ModalOptions`) which supports one option only at this time (the `disableDismissOnOutsideClick` with type boolean).

here's a full example of how to use this package in [code sandbox](https://codesandbox.io/s/global-modal-example-qw4e4w).
