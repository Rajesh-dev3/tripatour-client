import { toast } from 'react-toastify';

export const notify = (msg) => {
	function success() {

		toast.success(msg, {
			// position: toast.POSITION.TOP_RIGHT
		});
	}
	function error() {
		toast.error(msg, {
			// position: toast.POSITION.TOP_RIGHT
		});
	}
	return { success, error }
}