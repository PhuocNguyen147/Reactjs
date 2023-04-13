import { reject } from "lodash";

class CommonUtils {

    static getBase64(file) { // lưu file định dạng 64
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = Error => reject(Error);
        });
    }
}

export default CommonUtils;