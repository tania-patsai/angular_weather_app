import {ICurrentWeatherData} from "../interfaces/weather.interface";

export const weatherByCityMock = {
  "coord": {
    "lon": 24.0232,
    "lat": 49.8383
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 29.37,
    "feels_like": 27.8,
    "temp_min": 29.37,
    "temp_max": 29.37,
    "pressure": 1018,
    "humidity": 22,
    "sea_level": 1018,
    "grnd_level": 982
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.09,
    "deg": 94,
    "gust": 7.35
  },
  "clouds": {
    "all": 18
  },
  "dt": 1725458755,
  "sys": {
    "country": "UA",
    "sunrise": 1725421448,
    "sunset": 1725469321
  },
  "timezone": 10800,
  "id": 702550,
  "name": "Lviv",
  "cod": 200
}


export const forecastMock = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1725462000,
      "main": {
        "temp": 28.56,
        "feels_like": 27.26,
        "temp_min": 28.56,
        "temp_max": 28.56,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 982,
        "humidity": 24,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 18
      },
      "wind": {
        "speed": 6.06,
        "deg": 108,
        "gust": 7.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-04 15:00:00"
    },
    {
      "dt": 1725472800,
      "main": {
        "temp": 25.56,
        "feels_like": 25.01,
        "temp_min": 19.55,
        "temp_max": 25.56,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 32,
        "temp_kf": 6.01
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 21
      },
      "wind": {
        "speed": 3.34,
        "deg": 119,
        "gust": 6.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-04 18:00:00"
    },
    {
      "dt": 1725483600,
      "main": {
        "temp": 22.72,
        "feels_like": 22.01,
        "temp_min": 19.8,
        "temp_max": 22.72,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 37,
        "temp_kf": 2.92
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 71
      },
      "wind": {
        "speed": 1.62,
        "deg": 96,
        "gust": 1.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-04 21:00:00"
    },
    {
      "dt": 1725494400,
      "main": {
        "temp": 17.43,
        "feels_like": 16.4,
        "temp_min": 17.43,
        "temp_max": 17.43,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 983,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 1.85,
        "deg": 103,
        "gust": 2.22
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-05 00:00:00"
    },
    {
      "dt": 1725505200,
      "main": {
        "temp": 20.55,
        "feels_like": 19.52,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.67,
        "deg": 89,
        "gust": 9.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-05 03:00:00"
    },
    {
      "dt": 1725516000,
      "main": {
        "temp": 20.39,
        "feels_like": 19.42,
        "temp_min": 20.39,
        "temp_max": 20.39,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 983,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.97,
        "deg": 71,
        "gust": 6.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-05 06:00:00"
    },
    {
      "dt": 1725526800,
      "main": {
        "temp": 26.29,
        "feels_like": 26.29,
        "temp_min": 26.29,
        "temp_max": 26.29,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 83
      },
      "wind": {
        "speed": 4.23,
        "deg": 67,
        "gust": 6.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-05 09:00:00"
    },
    {
      "dt": 1725537600,
      "main": {
        "temp": 27.26,
        "feels_like": 26.25,
        "temp_min": 27.26,
        "temp_max": 27.26,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 982,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 91
      },
      "wind": {
        "speed": 6.5,
        "deg": 88,
        "gust": 7.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-05 12:00:00"
    },
    {
      "dt": 1725548400,
      "main": {
        "temp": 24.88,
        "feels_like": 24.15,
        "temp_min": 24.88,
        "temp_max": 24.88,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 982,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.83,
        "deg": 102,
        "gust": 6.83
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-05 15:00:00"
    },
    {
      "dt": 1725559200,
      "main": {
        "temp": 19.03,
        "feels_like": 17.9,
        "temp_min": 19.03,
        "temp_max": 19.03,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 982,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 3.23,
        "deg": 43,
        "gust": 5.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-05 18:00:00"
    },
    {
      "dt": 1725570000,
      "main": {
        "temp": 16.87,
        "feels_like": 15.74,
        "temp_min": 16.87,
        "temp_max": 16.87,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 982,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 31
      },
      "wind": {
        "speed": 3.47,
        "deg": 79,
        "gust": 6.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-05 21:00:00"
    },
    {
      "dt": 1725580800,
      "main": {
        "temp": 15.99,
        "feels_like": 14.69,
        "temp_min": 15.99,
        "temp_max": 15.99,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 982,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 47
      },
      "wind": {
        "speed": 3.17,
        "deg": 70,
        "gust": 5.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-06 00:00:00"
    },
    {
      "dt": 1725591600,
      "main": {
        "temp": 13.72,
        "feels_like": 12.53,
        "temp_min": 13.72,
        "temp_max": 13.72,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 982,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 3.44,
        "deg": 92,
        "gust": 7.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-06 03:00:00"
    },
    {
      "dt": 1725602400,
      "main": {
        "temp": 19.99,
        "feels_like": 19.45,
        "temp_min": 19.99,
        "temp_max": 19.99,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 984,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 6.06,
        "deg": 126,
        "gust": 14.03
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-06 06:00:00"
    },
    {
      "dt": 1725613200,
      "main": {
        "temp": 25.85,
        "feels_like": 25.2,
        "temp_min": 25.85,
        "temp_max": 25.85,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 984,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 72
      },
      "wind": {
        "speed": 7.18,
        "deg": 131,
        "gust": 12.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-06 09:00:00"
    },
    {
      "dt": 1725624000,
      "main": {
        "temp": 29.47,
        "feels_like": 27.74,
        "temp_min": 29.47,
        "temp_max": 29.47,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 61
      },
      "wind": {
        "speed": 8.76,
        "deg": 132,
        "gust": 11.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-06 12:00:00"
    },
    {
      "dt": 1725634800,
      "main": {
        "temp": 28.5,
        "feels_like": 27.05,
        "temp_min": 28.5,
        "temp_max": 28.5,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 18,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 7.64,
        "deg": 142,
        "gust": 10.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-06 15:00:00"
    },
    {
      "dt": 1725645600,
      "main": {
        "temp": 21.59,
        "feels_like": 20.69,
        "temp_min": 21.59,
        "temp_max": 21.59,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 984,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 62
      },
      "wind": {
        "speed": 5.11,
        "deg": 150,
        "gust": 12.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-06 18:00:00"
    },
    {
      "dt": 1725656400,
      "main": {
        "temp": 16.99,
        "feels_like": 16.05,
        "temp_min": 16.99,
        "temp_max": 16.99,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 985,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 21
      },
      "wind": {
        "speed": 3.8,
        "deg": 116,
        "gust": 8.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-06 21:00:00"
    },
    {
      "dt": 1725667200,
      "main": {
        "temp": 16.12,
        "feels_like": 15.17,
        "temp_min": 16.12,
        "temp_max": 16.12,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 985,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 23
      },
      "wind": {
        "speed": 3.57,
        "deg": 96,
        "gust": 7.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-07 00:00:00"
    },
    {
      "dt": 1725678000,
      "main": {
        "temp": 15.47,
        "feels_like": 14.56,
        "temp_min": 15.47,
        "temp_max": 15.47,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 985,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 29
      },
      "wind": {
        "speed": 3.05,
        "deg": 129,
        "gust": 7.37
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-07 03:00:00"
    },
    {
      "dt": 1725688800,
      "main": {
        "temp": 20.27,
        "feels_like": 19.55,
        "temp_min": 20.27,
        "temp_max": 20.27,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 986,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 21
      },
      "wind": {
        "speed": 5.11,
        "deg": 137,
        "gust": 11.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-07 06:00:00"
    },
    {
      "dt": 1725699600,
      "main": {
        "temp": 27.74,
        "feels_like": 26.79,
        "temp_min": 27.74,
        "temp_max": 27.74,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 986,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 74
      },
      "wind": {
        "speed": 6.83,
        "deg": 138,
        "gust": 7.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-07 09:00:00"
    },
    {
      "dt": 1725710400,
      "main": {
        "temp": 29.94,
        "feels_like": 28.22,
        "temp_min": 29.94,
        "temp_max": 29.94,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 984,
        "humidity": 21,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 45
      },
      "wind": {
        "speed": 5.82,
        "deg": 130,
        "gust": 6.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-07 12:00:00"
    },
    {
      "dt": 1725721200,
      "main": {
        "temp": 29.04,
        "feels_like": 27.49,
        "temp_min": 29.04,
        "temp_max": 29.04,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 984,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 26
      },
      "wind": {
        "speed": 5.79,
        "deg": 115,
        "gust": 5.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-07 15:00:00"
    },
    {
      "dt": 1725732000,
      "main": {
        "temp": 21.12,
        "feels_like": 20.07,
        "temp_min": 21.12,
        "temp_max": 21.12,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 984,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 17
      },
      "wind": {
        "speed": 2.82,
        "deg": 112,
        "gust": 2.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-07 18:00:00"
    },
    {
      "dt": 1725742800,
      "main": {
        "temp": 17.8,
        "feels_like": 16.37,
        "temp_min": 17.8,
        "temp_max": 17.8,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 985,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 3.94,
        "deg": 121,
        "gust": 10.09
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-07 21:00:00"
    },
    {
      "dt": 1725753600,
      "main": {
        "temp": 16.18,
        "feels_like": 14.51,
        "temp_min": 16.18,
        "temp_max": 16.18,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 984,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 3.86,
        "deg": 126,
        "gust": 10.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-08 00:00:00"
    },
    {
      "dt": 1725764400,
      "main": {
        "temp": 13.57,
        "feels_like": 11.71,
        "temp_min": 13.57,
        "temp_max": 13.57,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 984,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.16,
        "deg": 124,
        "gust": 7.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-08 03:00:00"
    },
    {
      "dt": 1725775200,
      "main": {
        "temp": 18.92,
        "feels_like": 17.44,
        "temp_min": 18.92,
        "temp_max": 18.92,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 985,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.33,
        "deg": 121,
        "gust": 8.6
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-08 06:00:00"
    },
    {
      "dt": 1725786000,
      "main": {
        "temp": 26.11,
        "feels_like": 26.11,
        "temp_min": 26.11,
        "temp_max": 26.11,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 985,
        "humidity": 14,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.6,
        "deg": 122,
        "gust": 5.82
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-08 09:00:00"
    },
    {
      "dt": 1725796800,
      "main": {
        "temp": 28.18,
        "feels_like": 26.74,
        "temp_min": 28.18,
        "temp_max": 28.18,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 983,
        "humidity": 11,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.87,
        "deg": 121,
        "gust": 5.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-08 12:00:00"
    },
    {
      "dt": 1725807600,
      "main": {
        "temp": 27.07,
        "feels_like": 25.95,
        "temp_min": 27.07,
        "temp_max": 27.07,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 983,
        "humidity": 12,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.19,
        "deg": 113,
        "gust": 5.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-08 15:00:00"
    },
    {
      "dt": 1725818400,
      "main": {
        "temp": 18.36,
        "feels_like": 16.88,
        "temp_min": 18.36,
        "temp_max": 18.36,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 983,
        "humidity": 24,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.21,
        "deg": 102,
        "gust": 3.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-08 18:00:00"
    },
    {
      "dt": 1725829200,
      "main": {
        "temp": 15.24,
        "feels_like": 13.58,
        "temp_min": 15.24,
        "temp_max": 15.24,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 982,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.83,
        "deg": 102,
        "gust": 2.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-08 21:00:00"
    },
    {
      "dt": 1725840000,
      "main": {
        "temp": 13.51,
        "feels_like": 11.73,
        "temp_min": 13.51,
        "temp_max": 13.51,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 982,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.8,
        "deg": 127,
        "gust": 3.59
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-09 00:00:00"
    },
    {
      "dt": 1725850800,
      "main": {
        "temp": 12.59,
        "feels_like": 10.71,
        "temp_min": 12.59,
        "temp_max": 12.59,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 981,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.65,
        "deg": 135,
        "gust": 3.36
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-09-09 03:00:00"
    },
    {
      "dt": 1725861600,
      "main": {
        "temp": 18.73,
        "feels_like": 17.42,
        "temp_min": 18.73,
        "temp_max": 18.73,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 981,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.58,
        "deg": 117,
        "gust": 7.53
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-09 06:00:00"
    },
    {
      "dt": 1725872400,
      "main": {
        "temp": 25.68,
        "feels_like": 24.72,
        "temp_min": 25.68,
        "temp_max": 25.68,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 980,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.51,
        "deg": 129,
        "gust": 6.52
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-09 09:00:00"
    },
    {
      "dt": 1725883200,
      "main": {
        "temp": 27.54,
        "feels_like": 26.3,
        "temp_min": 27.54,
        "temp_max": 27.54,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 978,
        "humidity": 13,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.79,
        "deg": 119,
        "gust": 5.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-09-09 12:00:00"
    }
  ],
  "city": {
    "id": 702550,
    "name": "Lviv",
    "coord": {
      "lat": 49.8383,
      "lon": 24.0232
    },
    "country": "UA",
    "population": 15000,
    "timezone": 10800,
    "sunrise": 1725421448,
    "sunset": 1725469321
  }
}

export const weatherDetailsMock: ICurrentWeatherData = {
  "name": "Lviv",
  "temp": 29.37,
  "humidity": 22,
  "description": "few clouds",
  "forecast": [
    {
      "dt_txt": "2024-09-05",
      "temp_min": 16.87,
      "temp_max": 27.26,
      "description": "Clouds"
    },
    {
      "dt_txt": "2024-09-06",
      "temp_min": 13.72,
      "temp_max": 29.47,
      "description": "Clouds"
    },
    {
      "dt_txt": "2024-09-07",
      "temp_min": 15.47,
      "temp_max": 29.94,
      "description": "Clouds"
    },
    {
      "dt_txt": "2024-09-08",
      "temp_min": 13.57,
      "temp_max": 28.18,
      "description": "Clear"
    },
    {
      "dt_txt": "2024-09-09",
      "temp_min": 12.59,
      "temp_max": 27.54,
      "description": "Clear"
    }
  ],
  "date": "2024-09-04"
}

