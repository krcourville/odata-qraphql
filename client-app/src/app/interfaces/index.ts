export interface FlightConnectionResponse {
  airportCode: string;
  time: string;
}

export interface FlightResponse {
  flightNo: string;
  start: FlightConnectionResponse;
  end: FlightConnectionResponse;
  statusId: string;
  status: string;
}

export interface ApiResponse {
  data: {
    flights: FlightResponse[];
  };
}
