'use client'

import React, { useRef, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface MarkerData {
  id: string
  title: string
  lat: number
  lng: number
}

const sampleMarkers: MarkerData[] = [
  { id: '1', title: '판교역', lat: 37.39466, lng: 127.111244 },
  { id: '2', title: '강남역', lat: 37.498004, lng: 127.027473 },
  { id: '3', title: '서울역', lat: 37.555946, lng: 126.972317 },
  { id: '4', title: '이천시청', lat: 37.289454, lng: 127.52899 },
  { id: '5', title: '이천 아울렛', lat: 37.247181, lng: 127.53201 },
]

const KaKaoMap = () => {
  const mapRef = useRef<kakao.maps.Map>(null)
  const [currentBounds, setCurrentBounds] =
    useState<string>('지도 범위를 불러오는 중...')

  const onMapCreated = (map: kakao.maps.Map) => {
    mapRef.current = map
    updateMapBounds(map)
  }

  const onBoundsChanged = (map: kakao.maps.Map) => {
    updateMapBounds(map)
  }

  const updateMapBounds = (map: kakao.maps.Map) => {
    const bounds = map.getBounds()
    const sw = bounds.getSouthWest()
    const ne = bounds.getNorthEast()

    setCurrentBounds(
      `SW: (위도: ${sw.getLat()}, 경도: ${sw.getLng()}), ` +
        `NE: (위도: ${ne.getLat()}, 경도: ${ne.getLng()})`
    )
  }

  return (
    <div className='w-full'>
      <h1 className='mb-4 text-2xl font-bold'>카카오맵 범위 확인</h1>
      <p className='mb-4'>
        현재 지도의 범위:
        <span className='font-semibold text-blue-600'>{currentBounds}</span>
      </p>
      <Map
        id='my-kakao-map'
        center={{
          lng: 127.532010428094,
          lat: 37.2471812542307,
        }}
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
        level={3}
        onCreate={onMapCreated}
        onBoundsChanged={onBoundsChanged}
      >
        {sampleMarkers.map((marker) => (
          <MapMarker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
            onClick={() => console.log(`${marker.title} 마커 클릭!`)}
          />
        ))}
      </Map>
    </div>
  )
}

export default KaKaoMap
