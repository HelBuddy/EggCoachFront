import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk'

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: '3571a2cdd7a0be20fa1175af24fef4ae',
    libraries: ['clusterer', 'drawing', 'services'],
  })
}
