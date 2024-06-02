import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const ismobile = () => {
  const router = useRouter();
  const isMobile = () => {
    return navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
  };

  onMounted(() => {
    if (isMobile()) {
      router.replace('/h5');
    } else {
      router.replace('/');
    }
  });
};

export default ismobile;
