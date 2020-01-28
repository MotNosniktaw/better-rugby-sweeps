using System;

using Api.Enums;

namespace Api.Models
{
    public class Match
    {
        public int Id { get; set; }
        public int WeekNumber { get; set; }
        public Country HomeTeam { get; set; }
        public string HomePlayer { get; set; }
        public Country AwayTeam { get; set; }
        public string AwayPlayer { get; set; }
        public DateTime Kickoff { get; set; }
        public Result? Result { get; set; }
    }
}
