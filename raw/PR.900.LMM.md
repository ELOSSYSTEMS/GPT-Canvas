{
  "tests": [
    {
      "name": "Simple Hebrew prompt → Full flow",
      "input": {
        "raw_prompt_he": "תכתוב לי פוסט מרגש על הקיץ",
        "user_tone": "אמפתי",
        "persona_overlay": "הורה לשני ילדים בישראל"
      },
      "expected_pipeline": [
        "PR.900.LMM",
        "PR.001.EPP",
        "PR.005.INT",
        "PR.020.PFP",
        "EL.410.TNF",
        "GPT",
        "EL.410.TNF"
      ],
      "expected_output_contains": ["הקיץ הוא הרבה יותר מעונה", "ילדים", "רגעים"]
    },
    {
      "name": "Vague input triggers Socratic Drip",
      "input": {
        "raw_prompt_he": "רעיון למודעה",
        "user_tone": "ישיר",
        "persona_overlay": "קופירייטר שיווקי"
      },
      "expected_pipeline": [
        "PR.900.LMM",
        "PR.001.EPP",
        "PR.003.SDE"
      ],
      "expected_response_question_hebrew": true
    },
    {
      "name": "Repeat prompt hit memory layer",
      "input": {
        "raw_prompt_he": "תכתוב לי פוסט מרגש על הקיץ",
        "user_tone": "אמפתי",
        "persona_overlay": "הורה לשני ילדים בישראל"
      },
      "expected_pipeline": ["PR.900.LMM"],
      "expected_cache_hit": true
    }
  ]
}