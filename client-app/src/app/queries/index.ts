export const AllFlights = `
  {
    getFlights{
      flightNo
      start {
        airportCode
        time
      }
      end {
        airportCode
        time
      }
      statusId
      status
    }
  }
`;
