window.BENCHMARK_DATA = {
  "lastUpdate": 1686882156395,
  "repoUrl": "https://github.com/newwan/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd1ab08d9600d01779b76528d731a57b41d67b3",
          "message": "feat: benchmark monitoring action (#1263)\n\n* feat: benchmark monitoring\r\n\r\n* fix: action gh-pages-branch\r\n\r\n* fix: change gh-pages-branch",
          "timestamp": "2023-06-15T21:34:23+08:00",
          "tree_id": "ccd939904f3ddedfe83574582cb14277d9a3e712",
          "url": "https://github.com/newwan/casbin/commit/9dd1ab08d9600d01779b76528d731a57b41d67b3"
        },
        "date": 1686882155969,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57548438 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 229,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5182308 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 232.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5314672 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 230.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5160714 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 239,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4887370 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 237.1,
            "unit": "ns/op\t      97 B/op\t       3 allocs/op",
            "extra": "4546052 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 230.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5186007 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 256.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4939869 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3669,
            "unit": "ns/op\t    1520 B/op\t      18 allocs/op",
            "extra": "312534 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 256.1,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4693676 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 232.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5192661 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 231,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5210840 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 227.9,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5292423 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 687.6,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1754532 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 716.3,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1605655 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 786.2,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1554258 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 712.5,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1686340 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 982.2,
            "unit": "ns/op\t     181 B/op\t       7 allocs/op",
            "extra": "1216479 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1719,
            "unit": "ns/op\t     460 B/op\t       9 allocs/op",
            "extra": "941439 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 708.4,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1656276 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 814.6,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1378861 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1797,
            "unit": "ns/op\t     297 B/op\t      13 allocs/op",
            "extra": "668516 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58137556 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4631,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "250729 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7108,
            "unit": "ns/op\t    2034 B/op\t      35 allocs/op",
            "extra": "166578 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63847,
            "unit": "ns/op\t   19972 B/op\t     480 allocs/op",
            "extra": "18982 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 688430,
            "unit": "ns/op\t  191331 B/op\t    4828 allocs/op",
            "extra": "1725 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 9039749,
            "unit": "ns/op\t 1895795 B/op\t   48078 allocs/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 76563,
            "unit": "ns/op\t   20024 B/op\t     615 allocs/op",
            "extra": "15349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 751682,
            "unit": "ns/op\t  194205 B/op\t    6023 allocs/op",
            "extra": "1408 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8881580,
            "unit": "ns/op\t 1945041 B/op\t   60814 allocs/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5872,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "188696 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6623,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "179095 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3603,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "326101 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4864963,
            "unit": "ns/op\t 1302938 B/op\t   40088 allocs/op",
            "extra": "246 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7712,
            "unit": "ns/op\t    3021 B/op\t      37 allocs/op",
            "extra": "156669 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9029,
            "unit": "ns/op\t    2440 B/op\t      49 allocs/op",
            "extra": "130886 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5397,
            "unit": "ns/op\t    1740 B/op\t      22 allocs/op",
            "extra": "218359 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 29240,
            "unit": "ns/op\t   16600 B/op\t     164 allocs/op",
            "extra": "41379 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 102837,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1099098,
            "unit": "ns/op\t  125909 B/op\t    8741 allocs/op",
            "extra": "1041 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12916675,
            "unit": "ns/op\t 1349923 B/op\t   89741 allocs/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7602648762,
            "unit": "ns/op\t5285354304 B/op\t60930559 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 209910147,
            "unit": "ns/op\t139507841 B/op\t 1670229 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7811459703,
            "unit": "ns/op\t5422354216 B/op\t62540989 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13546,
            "unit": "ns/op\t    7538 B/op\t     111 allocs/op",
            "extra": "90582 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 726.9,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1672060 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13064,
            "unit": "ns/op\t    7551 B/op\t     111 allocs/op",
            "extra": "90709 times\n2 procs"
          }
        ]
      }
    ]
  }
}