// -------------------------------------------------------------
// WARNING: this file is used by both the client and the server.
// Do not use any browser or node-specific API!
// -------------------------------------------------------------

// NOTE: Some websites override the String.prototype.trim method. When we use this function
// in our scripts, we expect it to have the default behavior. Therefore, in order to protect
// ourselves from spoofing, we must use our own implementation. Also, we cannot use the
// String.prototype.trim method because on the client-side it is the same in the top window and
// an iframe window. The client code may override this method in the top window before the
// iframe is initialized, so that the iframe will lose access to the native method.

export default function (str: string): string {
    return typeof str === 'string' ? str.replace(/(^\s+)|(\s+$)/g, '') : str;
}
