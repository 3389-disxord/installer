import {remote} from "electron";

export function showRestartNotice() {
    remote.dialog.showMessageBox({
        type: "info",
        title: "Restart Discord",
        message: "3389-disxord could not restart Discord. Please restart it manually."
    });
}

export function showKillNotice() {
    remote.dialog.showMessageBox({
        type: "error",
        title: "Shutdown Discord",
        message: "3389-disxord could not shut down Discord. Please make sure Discord is fully closed, then run the installer again."
    });
}