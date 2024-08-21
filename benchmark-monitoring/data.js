window.BENCHMARK_DATA = {
  "lastUpdate": 1724211402877,
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
      },
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
          "id": "4f18f44a619c1045258d3d980348027e3107082d",
          "message": "ci: change CI benchmark alert threshold (#1266)",
          "timestamp": "2023-06-17T00:18:17+08:00",
          "tree_id": "2c8a631c329bf5edbfb83b9e2cb12f1b4352b5e7",
          "url": "https://github.com/newwan/casbin/commit/4f18f44a619c1045258d3d980348027e3107082d"
        },
        "date": 1686997921651,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53738810 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5697559 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 210.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5658321 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 229.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4923253 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 251.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4765820 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 204.6,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "4906623 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 213,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5572448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 229.3,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5223246 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3773,
            "unit": "ns/op\t    1522 B/op\t      18 allocs/op",
            "extra": "302592 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 233.4,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5142681 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 207.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5801479 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 211.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5721177 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 212,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "6082964 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 656.2,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1865344 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 704.5,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1718740 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 726.8,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1661190 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 679.3,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1822521 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 886.9,
            "unit": "ns/op\t     179 B/op\t       7 allocs/op",
            "extra": "1328490 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1552,
            "unit": "ns/op\t     456 B/op\t       9 allocs/op",
            "extra": "957670 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 675.8,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1730733 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 769.7,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1428218 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1584,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "633499 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57357567 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4736,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "248330 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7139,
            "unit": "ns/op\t    2036 B/op\t      35 allocs/op",
            "extra": "165366 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63464,
            "unit": "ns/op\t   19959 B/op\t     480 allocs/op",
            "extra": "18736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 655478,
            "unit": "ns/op\t  191227 B/op\t    4828 allocs/op",
            "extra": "1813 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7849324,
            "unit": "ns/op\t 1896702 B/op\t   48097 allocs/op",
            "extra": "152 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 77170,
            "unit": "ns/op\t   20074 B/op\t     615 allocs/op",
            "extra": "15841 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 743238,
            "unit": "ns/op\t  194161 B/op\t    6022 allocs/op",
            "extra": "1550 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8561395,
            "unit": "ns/op\t 1946241 B/op\t   60851 allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5928,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "183924 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6625,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "175744 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3706,
            "unit": "ns/op\t    1511 B/op\t      17 allocs/op",
            "extra": "317179 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5253613,
            "unit": "ns/op\t 1303853 B/op\t   40088 allocs/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7849,
            "unit": "ns/op\t    3019 B/op\t      37 allocs/op",
            "extra": "151328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9194,
            "unit": "ns/op\t    2443 B/op\t      49 allocs/op",
            "extra": "129265 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5479,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "214936 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 29061,
            "unit": "ns/op\t   16604 B/op\t     164 allocs/op",
            "extra": "40333 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 102669,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1073240,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 14450297,
            "unit": "ns/op\t 1349918 B/op\t   89741 allocs/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7638907354,
            "unit": "ns/op\t5284843536 B/op\t60929998 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 207220446,
            "unit": "ns/op\t139501212 B/op\t 1670227 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7989735755,
            "unit": "ns/op\t5422691352 B/op\t62540527 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13397,
            "unit": "ns/op\t    7548 B/op\t     111 allocs/op",
            "extra": "88528 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 705.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1714824 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13513,
            "unit": "ns/op\t    7549 B/op\t     111 allocs/op",
            "extra": "87730 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peymanmortazavi@users.noreply.github.com",
            "name": "Peyman Mortazavi",
            "username": "peymanmortazavi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8353eda2716fb0038c5324f3cb7a41e51f36ee0c",
          "message": "fix: add EnforceContext' GetCacheKey() (#1265)\n\n* allow enforce context to get cached\r\n\r\n* add tests\r\n\r\n* Update enforcer_cached.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-06-17T22:31:53+08:00",
          "tree_id": "e865f6b93eafc3c706bd611174ae3ec2a9a16aeb",
          "url": "https://github.com/newwan/casbin/commit/8353eda2716fb0038c5324f3cb7a41e51f36ee0c"
        },
        "date": 1687063138580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58283053 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 219,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5351320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 220.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5466505 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 220,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5418549 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 226.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5136285 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 223.9,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5140296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 218.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5422696 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 229.7,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5172958 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3540,
            "unit": "ns/op\t    1520 B/op\t      18 allocs/op",
            "extra": "331034 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 254.4,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4932087 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 219.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5435812 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 222.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5360061 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 404.3,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "2954552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 223.3,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5300155 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 649,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1817617 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 686.4,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1716282 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 748.6,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1608572 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 666.2,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1795075 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 943.1,
            "unit": "ns/op\t     180 B/op\t       7 allocs/op",
            "extra": "1254800 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1559,
            "unit": "ns/op\t     413 B/op\t       9 allocs/op",
            "extra": "873908 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 672.4,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1798604 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 761,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1464424 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1759,
            "unit": "ns/op\t     296 B/op\t      13 allocs/op",
            "extra": "655885 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58098193 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4478,
            "unit": "ns/op\t    1489 B/op\t      17 allocs/op",
            "extra": "257110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 6767,
            "unit": "ns/op\t    2038 B/op\t      35 allocs/op",
            "extra": "174271 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 60896,
            "unit": "ns/op\t   19975 B/op\t     480 allocs/op",
            "extra": "19722 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 676179,
            "unit": "ns/op\t  191345 B/op\t    4828 allocs/op",
            "extra": "1785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 8304445,
            "unit": "ns/op\t 1896413 B/op\t   48087 allocs/op",
            "extra": "135 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 74745,
            "unit": "ns/op\t   20072 B/op\t     615 allocs/op",
            "extra": "16030 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 728725,
            "unit": "ns/op\t  194172 B/op\t    6022 allocs/op",
            "extra": "1497 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8569358,
            "unit": "ns/op\t 1947763 B/op\t   60912 allocs/op",
            "extra": "123 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5609,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "203026 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6272,
            "unit": "ns/op\t    1805 B/op\t      25 allocs/op",
            "extra": "188721 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3520,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "333435 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4721486,
            "unit": "ns/op\t 1302878 B/op\t   40088 allocs/op",
            "extra": "253 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7478,
            "unit": "ns/op\t    3021 B/op\t      37 allocs/op",
            "extra": "156822 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 8678,
            "unit": "ns/op\t    2444 B/op\t      49 allocs/op",
            "extra": "136588 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5150,
            "unit": "ns/op\t    1740 B/op\t      22 allocs/op",
            "extra": "230193 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 28692,
            "unit": "ns/op\t   16618 B/op\t     164 allocs/op",
            "extra": "42075 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 100819,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1027896,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1190 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12831388,
            "unit": "ns/op\t 1349922 B/op\t   89741 allocs/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7383395952,
            "unit": "ns/op\t5285296816 B/op\t60930394 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 210322946,
            "unit": "ns/op\t139530908 B/op\t 1670235 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7777884654,
            "unit": "ns/op\t5422402184 B/op\t62540810 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12843,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "90015 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 690.7,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1750387 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 12850,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "88809 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "YunShuEmail@foxmail.com",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12c6c5f67f6b0ed2894e963dc690d95c31e93aaf",
          "message": "docs: replace gitter links with discord (#1271)",
          "timestamp": "2023-07-08T23:17:39+08:00",
          "tree_id": "0fb04e043421294ba6bb55e4875c65fb2f2fb5f5",
          "url": "https://github.com/newwan/casbin/commit/12c6c5f67f6b0ed2894e963dc690d95c31e93aaf"
        },
        "date": 1688840480820,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57429646 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 210.7,
            "unit": "ns/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5743723 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 209.5,
            "unit": "ns/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5739799 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 217.9,
            "unit": "ns/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5443669 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 231.2,
            "unit": "ns/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5113837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 213.4,
            "unit": "ns/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5194258 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 208.6,
            "unit": "ns/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5708196 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 240.6,
            "unit": "ns/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5189809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3736,
            "unit": "ns/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "318152 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 236,
            "unit": "ns/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5048167 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 208.3,
            "unit": "ns/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5771934 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 208.7,
            "unit": "ns/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5698890 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 400.3,
            "unit": "ns/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2984330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 210.3,
            "unit": "ns/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5107876 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 649.9,
            "unit": "ns/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1804260 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 732.4,
            "unit": "ns/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1738962 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 743.3,
            "unit": "ns/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1560414 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 680.6,
            "unit": "ns/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1769876 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 855.4,
            "unit": "ns/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1357866 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1582,
            "unit": "ns/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 460,
            "unit": "B/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "939698 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 679.3,
            "unit": "ns/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1760114 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 774.3,
            "unit": "ns/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1405244 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1751,
            "unit": "ns/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 297,
            "unit": "B/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "697394 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57352827 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4809,
            "unit": "ns/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "246174 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7249,
            "unit": "ns/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "163045 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 65411,
            "unit": "ns/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19959,
            "unit": "B/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18571 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 686117,
            "unit": "ns/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191258,
            "unit": "B/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1748 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7679724,
            "unit": "ns/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896143,
            "unit": "B/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48089,
            "unit": "allocs/op",
            "extra": "151 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 78507,
            "unit": "ns/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20029,
            "unit": "B/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15247 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 751217,
            "unit": "ns/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194157,
            "unit": "B/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8379433,
            "unit": "ns/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946768,
            "unit": "B/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60870,
            "unit": "allocs/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6008,
            "unit": "ns/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1819,
            "unit": "B/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "180222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6704,
            "unit": "ns/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "177012 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3687,
            "unit": "ns/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "305949 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5050318,
            "unit": "ns/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303117,
            "unit": "B/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7671,
            "unit": "ns/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3020,
            "unit": "B/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "152636 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9077,
            "unit": "ns/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "131295 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5470,
            "unit": "ns/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1737,
            "unit": "B/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "217380 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28482,
            "unit": "ns/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16616,
            "unit": "B/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "41456 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 102128,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11952,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1071774,
            "unit": "ns/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12053922,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349917,
            "unit": "B/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7458585025,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285037920,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60929801,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 202251483,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139521803,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670219,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7678103410,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422019816,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62540102,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13488,
            "unit": "ns/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7539,
            "unit": "B/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92727 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 699.8,
            "unit": "ns/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1717039 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13157,
            "unit": "ns/op",
            "extra": "86180 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7536,
            "unit": "B/op",
            "extra": "86180 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "86180 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c907b9054e5a179fe7d1f64b3003837de3969bcc",
          "message": "Improve README table",
          "timestamp": "2023-09-25T19:23:35+08:00",
          "tree_id": "aa1f53a4ef1150c4d74263b08901cdfd8753e3da",
          "url": "https://github.com/newwan/casbin/commit/c907b9054e5a179fe7d1f64b3003837de3969bcc"
        },
        "date": 1698273970180,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 23.5,
            "unit": "ns/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50628930 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 273,
            "unit": "ns/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4325151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 259,
            "unit": "ns/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4695296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 268.7,
            "unit": "ns/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4306255 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 271.5,
            "unit": "ns/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4557333 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 262.3,
            "unit": "ns/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4174077 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 266.6,
            "unit": "ns/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4437904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 317.6,
            "unit": "ns/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3971493 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3831,
            "unit": "ns/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1519,
            "unit": "B/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "271280 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 293.9,
            "unit": "ns/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4086264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 246.3,
            "unit": "ns/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4829026 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 257.4,
            "unit": "ns/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4578243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 503.5,
            "unit": "ns/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2431598 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 245.8,
            "unit": "ns/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4183448 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 822.3,
            "unit": "ns/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1508424 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 786,
            "unit": "ns/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1527145 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 824.8,
            "unit": "ns/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1493976 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 801.2,
            "unit": "ns/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1428112 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1039,
            "unit": "ns/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 182,
            "unit": "B/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1155518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1671,
            "unit": "ns/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 430,
            "unit": "B/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "797706 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 827,
            "unit": "ns/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1495729 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 933.7,
            "unit": "ns/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1164955 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1893,
            "unit": "ns/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 305,
            "unit": "B/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "624902 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.51,
            "unit": "ns/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59237728 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5031,
            "unit": "ns/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "227509 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7879,
            "unit": "ns/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "144355 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 67378,
            "unit": "ns/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19971,
            "unit": "B/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "16885 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 783207,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191288,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4826,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 8926538,
            "unit": "ns/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896026,
            "unit": "B/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48075,
            "unit": "allocs/op",
            "extra": "118 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 90309,
            "unit": "ns/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20083,
            "unit": "B/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14126 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 918949,
            "unit": "ns/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194163,
            "unit": "B/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1195 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10102217,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952436,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61097,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6561,
            "unit": "ns/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "176361 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7156,
            "unit": "ns/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "169816 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4025,
            "unit": "ns/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "332250 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5096831,
            "unit": "ns/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1302807,
            "unit": "B/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9037,
            "unit": "ns/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3023,
            "unit": "B/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "120600 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9955,
            "unit": "ns/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "125474 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5571,
            "unit": "ns/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "208993 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 33258,
            "unit": "ns/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16612,
            "unit": "B/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "36650 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 108537,
            "unit": "ns/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9765 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1089300,
            "unit": "ns/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14028380,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349927,
            "unit": "B/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8350567831,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285712072,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936357,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 231263268,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139813867,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676186,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8920840442,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422597648,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62546741,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16975,
            "unit": "ns/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "74258 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 773.5,
            "unit": "ns/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1382359 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15029,
            "unit": "ns/op",
            "extra": "85174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "85174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "85174 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "17becaef6cfd033a07874fce1ade4953e6ead8b5",
          "message": "Remove PerformancePR.yml for security issue",
          "timestamp": "2023-10-30T14:05:45+08:00",
          "tree_id": "0c6d6373c498a1bfc104886cb2eeb041767416f3",
          "url": "https://github.com/newwan/casbin/commit/17becaef6cfd033a07874fce1ade4953e6ead8b5"
        },
        "date": 1698678626646,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.56,
            "unit": "ns/op",
            "extra": "46971615 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46971615 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46971615 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 276.9,
            "unit": "ns/op",
            "extra": "4148364 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4148364 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4148364 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 278.9,
            "unit": "ns/op",
            "extra": "4278883 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4278883 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4278883 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 289.1,
            "unit": "ns/op",
            "extra": "4168069 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4168069 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4168069 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 304.1,
            "unit": "ns/op",
            "extra": "3833739 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3833739 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3833739 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 260.8,
            "unit": "ns/op",
            "extra": "4253914 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4253914 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4253914 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 279.7,
            "unit": "ns/op",
            "extra": "4332265 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4332265 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4332265 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 294.7,
            "unit": "ns/op",
            "extra": "3751261 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3751261 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3751261 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4319,
            "unit": "ns/op",
            "extra": "261126 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "261126 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "261126 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 301,
            "unit": "ns/op",
            "extra": "4153119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4153119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4153119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 277.2,
            "unit": "ns/op",
            "extra": "4329787 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4329787 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4329787 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 280.3,
            "unit": "ns/op",
            "extra": "4305356 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4305356 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4305356 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 520.8,
            "unit": "ns/op",
            "extra": "2287382 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2287382 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2287382 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 286.7,
            "unit": "ns/op",
            "extra": "4639940 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4639940 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4639940 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 823.3,
            "unit": "ns/op",
            "extra": "1402844 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1402844 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1402844 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 887.3,
            "unit": "ns/op",
            "extra": "1356230 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1356230 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1356230 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 941.5,
            "unit": "ns/op",
            "extra": "1304288 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1304288 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1304288 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 836.9,
            "unit": "ns/op",
            "extra": "1421967 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1421967 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1421967 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1181,
            "unit": "ns/op",
            "extra": "1045518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 184,
            "unit": "B/op",
            "extra": "1045518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1045518 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1886,
            "unit": "ns/op",
            "extra": "727376 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 418,
            "unit": "B/op",
            "extra": "727376 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "727376 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 866.6,
            "unit": "ns/op",
            "extra": "1393845 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1393845 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1393845 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1027,
            "unit": "ns/op",
            "extra": "1086645 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1086645 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1086645 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2146,
            "unit": "ns/op",
            "extra": "585584 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "585584 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "585584 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.29,
            "unit": "ns/op",
            "extra": "48956414 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48956414 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48956414 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5568,
            "unit": "ns/op",
            "extra": "207336 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "207336 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "207336 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8443,
            "unit": "ns/op",
            "extra": "143635 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2037,
            "unit": "B/op",
            "extra": "143635 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "143635 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 78129,
            "unit": "ns/op",
            "extra": "15308 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19962,
            "unit": "B/op",
            "extra": "15308 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15308 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 873009,
            "unit": "ns/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191235,
            "unit": "B/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9445166,
            "unit": "ns/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903177,
            "unit": "B/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48274,
            "unit": "allocs/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 92598,
            "unit": "ns/op",
            "extra": "12747 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20026,
            "unit": "B/op",
            "extra": "12747 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12747 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 894340,
            "unit": "ns/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194221,
            "unit": "B/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10660525,
            "unit": "ns/op",
            "extra": "108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1950567,
            "unit": "B/op",
            "extra": "108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61037,
            "unit": "allocs/op",
            "extra": "108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7019,
            "unit": "ns/op",
            "extra": "163797 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1821,
            "unit": "B/op",
            "extra": "163797 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "163797 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8051,
            "unit": "ns/op",
            "extra": "151416 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "151416 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "151416 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4295,
            "unit": "ns/op",
            "extra": "277694 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "277694 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "277694 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5604876,
            "unit": "ns/op",
            "extra": "212 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303207,
            "unit": "B/op",
            "extra": "212 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "212 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9393,
            "unit": "ns/op",
            "extra": "126421 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "126421 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "126421 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10803,
            "unit": "ns/op",
            "extra": "109200 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "109200 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "109200 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6330,
            "unit": "ns/op",
            "extra": "188515 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "188515 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "188515 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 35794,
            "unit": "ns/op",
            "extra": "32769 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16594,
            "unit": "B/op",
            "extra": "32769 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "32769 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 120258,
            "unit": "ns/op",
            "extra": "9026 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9026 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9026 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1306028,
            "unit": "ns/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 15434426,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9340778745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285443432,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936718,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 253908049,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139770700,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676188,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9688616675,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422542240,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547084,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16081,
            "unit": "ns/op",
            "extra": "74572 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "74572 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "74572 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 868.1,
            "unit": "ns/op",
            "extra": "1355868 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1355868 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1355868 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16444,
            "unit": "ns/op",
            "extra": "75852 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7539,
            "unit": "B/op",
            "extra": "75852 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "75852 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas.bichinger@gmail.com",
            "name": "abichinger",
            "username": "abichinger"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6703d2f87e113696f2f613cde1597fcec6afcf31",
          "message": "feat: support all types for JSON request in ABAC (#1343)",
          "timestamp": "2023-11-24T15:55:12+08:00",
          "tree_id": "00445c0aed43f07194a3cfcda2f01365771e009a",
          "url": "https://github.com/newwan/casbin/commit/6703d2f87e113696f2f613cde1597fcec6afcf31"
        },
        "date": 1700833554674,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "67913586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67913586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67913586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 165.7,
            "unit": "ns/op",
            "extra": "7190155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7190155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7190155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 161.8,
            "unit": "ns/op",
            "extra": "7335979 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7335979 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7335979 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 169.4,
            "unit": "ns/op",
            "extra": "7012850 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7012850 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7012850 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 175.3,
            "unit": "ns/op",
            "extra": "6671396 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6671396 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6671396 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 157.1,
            "unit": "ns/op",
            "extra": "7178044 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7178044 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7178044 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 163.1,
            "unit": "ns/op",
            "extra": "6796069 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6796069 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6796069 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 173.5,
            "unit": "ns/op",
            "extra": "6906073 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6906073 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6906073 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2934,
            "unit": "ns/op",
            "extra": "406671 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1538,
            "unit": "B/op",
            "extra": "406671 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "406671 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 178.4,
            "unit": "ns/op",
            "extra": "6812662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6812662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6812662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 170.8,
            "unit": "ns/op",
            "extra": "7276318 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7276318 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7276318 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 163.8,
            "unit": "ns/op",
            "extra": "7339914 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7339914 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7339914 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 297.5,
            "unit": "ns/op",
            "extra": "3854188 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3854188 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3854188 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 118.9,
            "unit": "ns/op",
            "extra": "9671780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9671780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9671780 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 460.2,
            "unit": "ns/op",
            "extra": "2641189 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2641189 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2641189 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 461.1,
            "unit": "ns/op",
            "extra": "2598778 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2598778 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2598778 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 501,
            "unit": "ns/op",
            "extra": "2428581 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2428581 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2428581 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 477.6,
            "unit": "ns/op",
            "extra": "2463518 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2463518 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2463518 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 560.8,
            "unit": "ns/op",
            "extra": "2082086 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2082086 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2082086 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1147,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 481.1,
            "unit": "ns/op",
            "extra": "2376888 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2376888 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2376888 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 559.1,
            "unit": "ns/op",
            "extra": "2080472 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2080472 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2080472 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1232,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 287,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.64,
            "unit": "ns/op",
            "extra": "67890328 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67890328 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67890328 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3645,
            "unit": "ns/op",
            "extra": "314138 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1504,
            "unit": "B/op",
            "extra": "314138 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "314138 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5487,
            "unit": "ns/op",
            "extra": "215917 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2059,
            "unit": "B/op",
            "extra": "215917 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "215917 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47400,
            "unit": "ns/op",
            "extra": "25171 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20167,
            "unit": "B/op",
            "extra": "25171 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25171 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 491601,
            "unit": "ns/op",
            "extra": "2484 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191541,
            "unit": "B/op",
            "extra": "2484 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2484 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5235897,
            "unit": "ns/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899525,
            "unit": "B/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48171,
            "unit": "allocs/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 57305,
            "unit": "ns/op",
            "extra": "20402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20205,
            "unit": "B/op",
            "extra": "20402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 563442,
            "unit": "ns/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194174,
            "unit": "B/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5964425,
            "unit": "ns/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1939894,
            "unit": "B/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60561,
            "unit": "allocs/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4603,
            "unit": "ns/op",
            "extra": "236956 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1841,
            "unit": "B/op",
            "extra": "236956 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "236956 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5139,
            "unit": "ns/op",
            "extra": "226164 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "226164 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "226164 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2856,
            "unit": "ns/op",
            "extra": "412822 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1531,
            "unit": "B/op",
            "extra": "412822 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "412822 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3984624,
            "unit": "ns/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1319398,
            "unit": "B/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40090,
            "unit": "allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6198,
            "unit": "ns/op",
            "extra": "192872 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3057,
            "unit": "B/op",
            "extra": "192872 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "192872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7081,
            "unit": "ns/op",
            "extra": "169022 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2475,
            "unit": "B/op",
            "extra": "169022 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "169022 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4300,
            "unit": "ns/op",
            "extra": "279277 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1757,
            "unit": "B/op",
            "extra": "279277 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "279277 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23800,
            "unit": "ns/op",
            "extra": "51097 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16719,
            "unit": "B/op",
            "extra": "51097 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51097 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69529,
            "unit": "ns/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11954,
            "unit": "B/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 738640,
            "unit": "ns/op",
            "extra": "1644 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125913,
            "unit": "B/op",
            "extra": "1644 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1644 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8028753,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349922,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5787848723,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5325335696,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60945199,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 158794303,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140872589,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676425,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 5949221124,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5465352640,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62556320,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10158,
            "unit": "ns/op",
            "extra": "118448 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7591,
            "unit": "B/op",
            "extra": "118448 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "118448 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 487.4,
            "unit": "ns/op",
            "extra": "2425899 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2425899 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2425899 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10069,
            "unit": "ns/op",
            "extra": "119564 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7593,
            "unit": "B/op",
            "extra": "119564 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "119564 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53203743+yesgs@users.noreply.github.com",
            "name": "yesgs",
            "username": "yesgs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "953c551d15c8f64bbe2149d23c3cf5fd3b12fa7f",
          "message": "feat: fix concurrent map writes issue in getCachedResult() (#1348)\n\nCo-authored-by: king <yewei@myhayo.com>",
          "timestamp": "2023-12-18T20:46:57+08:00",
          "tree_id": "a0168762b1cd5571b4b176f5548e4f1c80d7d97a",
          "url": "https://github.com/newwan/casbin/commit/953c551d15c8f64bbe2149d23c3cf5fd3b12fa7f"
        },
        "date": 1702951297160,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.53,
            "unit": "ns/op",
            "extra": "68413873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68413873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68413873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 158.6,
            "unit": "ns/op",
            "extra": "7516311 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7516311 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7516311 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 160.1,
            "unit": "ns/op",
            "extra": "7463695 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7463695 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7463695 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 183.5,
            "unit": "ns/op",
            "extra": "6487784 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6487784 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6487784 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 183.3,
            "unit": "ns/op",
            "extra": "6327231 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6327231 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6327231 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 159.4,
            "unit": "ns/op",
            "extra": "7336495 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7336495 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7336495 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 159.2,
            "unit": "ns/op",
            "extra": "7354002 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7354002 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7354002 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 167.1,
            "unit": "ns/op",
            "extra": "7048800 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "7048800 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7048800 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2825,
            "unit": "ns/op",
            "extra": "414030 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1537,
            "unit": "B/op",
            "extra": "414030 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "414030 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 169.9,
            "unit": "ns/op",
            "extra": "7031751 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "7031751 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7031751 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "6802886 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6802886 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6802886 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 160.1,
            "unit": "ns/op",
            "extra": "7500075 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7500075 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7500075 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 290.1,
            "unit": "ns/op",
            "extra": "4134999 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4134999 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4134999 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "6581472 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6581472 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6581472 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 430.7,
            "unit": "ns/op",
            "extra": "2666284 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2666284 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2666284 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 470.9,
            "unit": "ns/op",
            "extra": "2552244 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2552244 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2552244 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 516.2,
            "unit": "ns/op",
            "extra": "2394738 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2394738 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2394738 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 485.3,
            "unit": "ns/op",
            "extra": "2532382 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2532382 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2532382 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 523.4,
            "unit": "ns/op",
            "extra": "2160406 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2160406 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2160406 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1128,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 483.6,
            "unit": "ns/op",
            "extra": "2524988 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2524988 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2524988 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 540.1,
            "unit": "ns/op",
            "extra": "2109486 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2109486 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2109486 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1239,
            "unit": "ns/op",
            "extra": "925627 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "925627 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "925627 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.51,
            "unit": "ns/op",
            "extra": "68947162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68947162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68947162 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3586,
            "unit": "ns/op",
            "extra": "327426 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1504,
            "unit": "B/op",
            "extra": "327426 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "327426 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5320,
            "unit": "ns/op",
            "extra": "216211 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2056,
            "unit": "B/op",
            "extra": "216211 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "216211 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 50383,
            "unit": "ns/op",
            "extra": "23844 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20297,
            "unit": "B/op",
            "extra": "23844 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "23844 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 499014,
            "unit": "ns/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191747,
            "unit": "B/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5188641,
            "unit": "ns/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903090,
            "unit": "B/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48265,
            "unit": "allocs/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 60869,
            "unit": "ns/op",
            "extra": "19939 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20445,
            "unit": "B/op",
            "extra": "19939 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "19939 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 578607,
            "unit": "ns/op",
            "extra": "1957 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194719,
            "unit": "B/op",
            "extra": "1957 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1957 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5963455,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941329,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60615,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4483,
            "unit": "ns/op",
            "extra": "246584 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1838,
            "unit": "B/op",
            "extra": "246584 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "246584 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5062,
            "unit": "ns/op",
            "extra": "229521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1818,
            "unit": "B/op",
            "extra": "229521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "229521 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2790,
            "unit": "ns/op",
            "extra": "419482 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1528,
            "unit": "B/op",
            "extra": "419482 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "419482 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3890071,
            "unit": "ns/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1320387,
            "unit": "B/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 5956,
            "unit": "ns/op",
            "extra": "199905 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3049,
            "unit": "B/op",
            "extra": "199905 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "199905 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6872,
            "unit": "ns/op",
            "extra": "173301 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2470,
            "unit": "B/op",
            "extra": "173301 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "173301 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4128,
            "unit": "ns/op",
            "extra": "284517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1756,
            "unit": "B/op",
            "extra": "284517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "284517 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23845,
            "unit": "ns/op",
            "extra": "50438 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16747,
            "unit": "B/op",
            "extra": "50438 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "50438 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 71733,
            "unit": "ns/op",
            "extra": "16681 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11956,
            "unit": "B/op",
            "extra": "16681 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "16681 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 747118,
            "unit": "ns/op",
            "extra": "1527 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125916,
            "unit": "B/op",
            "extra": "1527 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1527 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8406387,
            "unit": "ns/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6205235855,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5350235168,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60951478,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 169952060,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141470572,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676568,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6401742631,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5490248592,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62562606,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10683,
            "unit": "ns/op",
            "extra": "111655 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7623,
            "unit": "B/op",
            "extra": "111655 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "111655 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 498.2,
            "unit": "ns/op",
            "extra": "2392929 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2392929 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2392929 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10710,
            "unit": "ns/op",
            "extra": "112704 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7613,
            "unit": "B/op",
            "extra": "112704 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "112704 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85475922+nomeguy@users.noreply.github.com",
            "name": "Gucheng",
            "username": "nomeguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96826309249a07afbdaa8829097ecdc3ea690caf",
          "message": "Update README.md",
          "timestamp": "2023-12-20T01:50:47+08:00",
          "tree_id": "b1d8be853b9632b288c8553f921f9dfb05a90b0f",
          "url": "https://github.com/newwan/casbin/commit/96826309249a07afbdaa8829097ecdc3ea690caf"
        },
        "date": 1703030522177,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.5,
            "unit": "ns/op",
            "extra": "67709356 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67709356 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67709356 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 164.8,
            "unit": "ns/op",
            "extra": "7272283 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7272283 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7272283 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 164.9,
            "unit": "ns/op",
            "extra": "7191290 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7191290 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7191290 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 178.6,
            "unit": "ns/op",
            "extra": "6652033 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6652033 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6652033 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 183.7,
            "unit": "ns/op",
            "extra": "6377811 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6377811 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6377811 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "6824517 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "6824517 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6824517 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 165.9,
            "unit": "ns/op",
            "extra": "7135146 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7135146 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7135146 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 176.5,
            "unit": "ns/op",
            "extra": "6843140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6843140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6843140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2956,
            "unit": "ns/op",
            "extra": "396453 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1544,
            "unit": "B/op",
            "extra": "396453 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "396453 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 185.8,
            "unit": "ns/op",
            "extra": "6553647 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6553647 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6553647 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 165.7,
            "unit": "ns/op",
            "extra": "7190678 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7190678 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7190678 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 166.1,
            "unit": "ns/op",
            "extra": "7246125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7246125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7246125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 307,
            "unit": "ns/op",
            "extra": "3952816 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3952816 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3952816 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 179.1,
            "unit": "ns/op",
            "extra": "5984872 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "5984872 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5984872 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 447.8,
            "unit": "ns/op",
            "extra": "2663746 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2663746 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2663746 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 485.3,
            "unit": "ns/op",
            "extra": "2457544 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2457544 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2457544 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 503.5,
            "unit": "ns/op",
            "extra": "2382631 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2382631 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2382631 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 483.7,
            "unit": "ns/op",
            "extra": "2569047 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2569047 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2569047 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 570.3,
            "unit": "ns/op",
            "extra": "2107142 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2107142 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2107142 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1124,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 500.4,
            "unit": "ns/op",
            "extra": "2376351 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2376351 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2376351 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 575.1,
            "unit": "ns/op",
            "extra": "2025955 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2025955 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2025955 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1315,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 289,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.52,
            "unit": "ns/op",
            "extra": "68366874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68366874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68366874 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3669,
            "unit": "ns/op",
            "extra": "315672 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1508,
            "unit": "B/op",
            "extra": "315672 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "315672 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5793,
            "unit": "ns/op",
            "extra": "212215 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2065,
            "unit": "B/op",
            "extra": "212215 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "212215 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 48897,
            "unit": "ns/op",
            "extra": "24440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20274,
            "unit": "B/op",
            "extra": "24440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 506904,
            "unit": "ns/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191566,
            "unit": "B/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5344503,
            "unit": "ns/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899621,
            "unit": "B/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48172,
            "unit": "allocs/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 58195,
            "unit": "ns/op",
            "extra": "20655 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20349,
            "unit": "B/op",
            "extra": "20655 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20655 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 565734,
            "unit": "ns/op",
            "extra": "1924 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194562,
            "unit": "B/op",
            "extra": "1924 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1924 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6137005,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941145,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60638,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4604,
            "unit": "ns/op",
            "extra": "247645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1841,
            "unit": "B/op",
            "extra": "247645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "247645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5166,
            "unit": "ns/op",
            "extra": "229136 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1826,
            "unit": "B/op",
            "extra": "229136 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "229136 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2913,
            "unit": "ns/op",
            "extra": "408752 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1534,
            "unit": "B/op",
            "extra": "408752 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "408752 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3936252,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1323054,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6241,
            "unit": "ns/op",
            "extra": "191775 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3070,
            "unit": "B/op",
            "extra": "191775 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "191775 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7045,
            "unit": "ns/op",
            "extra": "169152 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2477,
            "unit": "B/op",
            "extra": "169152 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "169152 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4255,
            "unit": "ns/op",
            "extra": "281019 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1765,
            "unit": "B/op",
            "extra": "281019 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "281019 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 24373,
            "unit": "ns/op",
            "extra": "51420 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16743,
            "unit": "B/op",
            "extra": "51420 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51420 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70994,
            "unit": "ns/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 740642,
            "unit": "ns/op",
            "extra": "1630 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1630 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1630 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8347301,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349928,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6081762445,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5341511416,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948794,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 163991673,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141230588,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676496,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6272517680,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5481315944,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559930,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10549,
            "unit": "ns/op",
            "extra": "114663 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7605,
            "unit": "B/op",
            "extra": "114663 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114663 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 494.5,
            "unit": "ns/op",
            "extra": "2430183 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2430183 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2430183 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10415,
            "unit": "ns/op",
            "extra": "102458 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7603,
            "unit": "B/op",
            "extra": "102458 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "102458 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "72999113+bartventer@users.noreply.github.com",
            "name": "Bart Venter",
            "username": "bartventer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c66aada23606abd050caa4587f50a14f56c18022",
          "message": "feat: update IEnforcer for missing domain methods (#1350)",
          "timestamp": "2023-12-31T18:32:49+08:00",
          "tree_id": "6c8f25bc648a9f9bfc3a3f7428d1012fb8de8076",
          "url": "https://github.com/newwan/casbin/commit/c66aada23606abd050caa4587f50a14f56c18022"
        },
        "date": 1704074550075,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.56,
            "unit": "ns/op",
            "extra": "67823022 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67823022 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67823022 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 166.2,
            "unit": "ns/op",
            "extra": "7239488 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7239488 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7239488 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 165.8,
            "unit": "ns/op",
            "extra": "7180513 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7180513 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7180513 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 177.1,
            "unit": "ns/op",
            "extra": "6724370 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6724370 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6724370 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 181.4,
            "unit": "ns/op",
            "extra": "6376854 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6376854 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6376854 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 161.5,
            "unit": "ns/op",
            "extra": "7202514 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7202514 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7202514 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 166.6,
            "unit": "ns/op",
            "extra": "6338774 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6338774 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6338774 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 176.9,
            "unit": "ns/op",
            "extra": "6770821 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6770821 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6770821 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2938,
            "unit": "ns/op",
            "extra": "400563 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1545,
            "unit": "B/op",
            "extra": "400563 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "400563 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 183.7,
            "unit": "ns/op",
            "extra": "6541539 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6541539 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6541539 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 166.1,
            "unit": "ns/op",
            "extra": "7132390 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7132390 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7132390 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "7191754 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7191754 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7191754 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 313.3,
            "unit": "ns/op",
            "extra": "3890140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3890140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3890140 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 175.2,
            "unit": "ns/op",
            "extra": "6770080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6770080 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6770080 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 450,
            "unit": "ns/op",
            "extra": "2610896 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2610896 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2610896 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 471.1,
            "unit": "ns/op",
            "extra": "2533354 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2533354 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2533354 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 508.5,
            "unit": "ns/op",
            "extra": "2396437 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2396437 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2396437 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 470.3,
            "unit": "ns/op",
            "extra": "2499141 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2499141 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2499141 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 564.6,
            "unit": "ns/op",
            "extra": "2074868 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2074868 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2074868 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1263,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 505.7,
            "unit": "ns/op",
            "extra": "2371699 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2371699 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2371699 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 532.2,
            "unit": "ns/op",
            "extra": "2121603 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2121603 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2121603 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1216,
            "unit": "ns/op",
            "extra": "878085 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 294,
            "unit": "B/op",
            "extra": "878085 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "878085 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.58,
            "unit": "ns/op",
            "extra": "66740162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66740162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66740162 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3663,
            "unit": "ns/op",
            "extra": "319407 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1505,
            "unit": "B/op",
            "extra": "319407 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "319407 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5436,
            "unit": "ns/op",
            "extra": "215408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2060,
            "unit": "B/op",
            "extra": "215408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "215408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47215,
            "unit": "ns/op",
            "extra": "25551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20149,
            "unit": "B/op",
            "extra": "25551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 497112,
            "unit": "ns/op",
            "extra": "2408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191790,
            "unit": "B/op",
            "extra": "2408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2408 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5382370,
            "unit": "ns/op",
            "extra": "214 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896828,
            "unit": "B/op",
            "extra": "214 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48085,
            "unit": "allocs/op",
            "extra": "214 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 57757,
            "unit": "ns/op",
            "extra": "20850 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20233,
            "unit": "B/op",
            "extra": "20850 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20850 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 574558,
            "unit": "ns/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194639,
            "unit": "B/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6177515,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941594,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60649,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4654,
            "unit": "ns/op",
            "extra": "234840 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1845,
            "unit": "B/op",
            "extra": "234840 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "234840 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5234,
            "unit": "ns/op",
            "extra": "225981 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1826,
            "unit": "B/op",
            "extra": "225981 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "225981 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2867,
            "unit": "ns/op",
            "extra": "408973 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1534,
            "unit": "B/op",
            "extra": "408973 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "408973 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3924287,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1324029,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6248,
            "unit": "ns/op",
            "extra": "190048 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3064,
            "unit": "B/op",
            "extra": "190048 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "190048 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7028,
            "unit": "ns/op",
            "extra": "169600 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2481,
            "unit": "B/op",
            "extra": "169600 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "169600 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4260,
            "unit": "ns/op",
            "extra": "274856 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1761,
            "unit": "B/op",
            "extra": "274856 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "274856 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23335,
            "unit": "ns/op",
            "extra": "51231 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16727,
            "unit": "B/op",
            "extra": "51231 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51231 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70606,
            "unit": "ns/op",
            "extra": "17206 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17206 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17206 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 738346,
            "unit": "ns/op",
            "extra": "1545 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125913,
            "unit": "B/op",
            "extra": "1545 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1545 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8048256,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349919,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5868539476,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5331241648,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60946478,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 160748957,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140984269,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676443,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6023516853,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5469887960,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62557371,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10144,
            "unit": "ns/op",
            "extra": "114482 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7597,
            "unit": "B/op",
            "extra": "114482 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114482 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 499,
            "unit": "ns/op",
            "extra": "2434285 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2434285 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2434285 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10400,
            "unit": "ns/op",
            "extra": "110509 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7611,
            "unit": "B/op",
            "extra": "110509 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "110509 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47297289+dacongda@users.noreply.github.com",
            "name": "DacongDA",
            "username": "dacongda"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5acc40498bb0a720e86dde4dffccb80fbded93d4",
          "message": "feat: return error in getUserPermissions() related APIs (#1358)",
          "timestamp": "2024-02-07T23:34:31+08:00",
          "tree_id": "6081242703f91e7950deb8519aeb1de9e0cfb604",
          "url": "https://github.com/newwan/casbin/commit/5acc40498bb0a720e86dde4dffccb80fbded93d4"
        },
        "date": 1707402755824,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 17.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68145414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.61,
            "unit": "ns/op",
            "extra": "68145414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68145414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68145414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 166.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7127820 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "7127820 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7127820 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7127820 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 163.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7249125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 163.6,
            "unit": "ns/op",
            "extra": "7249125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7249125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7249125 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 170.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6989031 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 170.7,
            "unit": "ns/op",
            "extra": "6989031 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6989031 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6989031 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 177,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6670674 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 177,
            "unit": "ns/op",
            "extra": "6670674 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6670674 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6670674 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 157.8,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "7143224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 157.8,
            "unit": "ns/op",
            "extra": "7143224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7143224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7143224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 165.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7078285 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 165.5,
            "unit": "ns/op",
            "extra": "7078285 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7078285 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7078285 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 174.1,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "6912934 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 174.1,
            "unit": "ns/op",
            "extra": "6912934 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6912934 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6912934 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2923,
            "unit": "ns/op\t    1539 B/op\t      18 allocs/op",
            "extra": "405112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2923,
            "unit": "ns/op",
            "extra": "405112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1539,
            "unit": "B/op",
            "extra": "405112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "405112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 188,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "6634550 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 188,
            "unit": "ns/op",
            "extra": "6634550 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6634550 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6634550 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 166.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7233780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 166.4,
            "unit": "ns/op",
            "extra": "7233780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7233780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7233780 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 168.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7177262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 168.1,
            "unit": "ns/op",
            "extra": "7177262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7177262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7177262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 297.7,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "4011908 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 297.7,
            "unit": "ns/op",
            "extra": "4011908 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4011908 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4011908 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 176,
            "unit": "ns/op\t     107 B/op\t       4 allocs/op",
            "extra": "5752522 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 176,
            "unit": "ns/op",
            "extra": "5752522 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 107,
            "unit": "B/op",
            "extra": "5752522 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5752522 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 443.7,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "2709549 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 443.7,
            "unit": "ns/op",
            "extra": "2709549 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2709549 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2709549 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 469.1,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "2564264 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 469.1,
            "unit": "ns/op",
            "extra": "2564264 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2564264 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2564264 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 502.3,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "2360886 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 502.3,
            "unit": "ns/op",
            "extra": "2360886 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2360886 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2360886 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 476.9,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "2472842 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 476.9,
            "unit": "ns/op",
            "extra": "2472842 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2472842 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2472842 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 563,
            "unit": "ns/op\t     172 B/op\t       7 allocs/op",
            "extra": "2086220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 563,
            "unit": "ns/op",
            "extra": "2086220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2086220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2086220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1197,
            "unit": "ns/op\t     473 B/op\t       9 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1197,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 490.5,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "2400535 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 490.5,
            "unit": "ns/op",
            "extra": "2400535 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2400535 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2400535 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 558.9,
            "unit": "ns/op\t     176 B/op\t       7 allocs/op",
            "extra": "2108864 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 558.9,
            "unit": "ns/op",
            "extra": "2108864 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2108864 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2108864 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1244,
            "unit": "ns/op\t     284 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1244,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 284,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 17.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66845134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.59,
            "unit": "ns/op",
            "extra": "66845134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66845134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66845134 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3633,
            "unit": "ns/op\t    1508 B/op\t      17 allocs/op",
            "extra": "326558 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3633,
            "unit": "ns/op",
            "extra": "326558 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1508,
            "unit": "B/op",
            "extra": "326558 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "326558 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5424,
            "unit": "ns/op\t    2068 B/op\t      35 allocs/op",
            "extra": "219272 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5424,
            "unit": "ns/op",
            "extra": "219272 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2068,
            "unit": "B/op",
            "extra": "219272 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "219272 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 46659,
            "unit": "ns/op\t   20153 B/op\t     480 allocs/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 46659,
            "unit": "ns/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20153,
            "unit": "B/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 485852,
            "unit": "ns/op\t  191666 B/op\t    4829 allocs/op",
            "extra": "2521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 485852,
            "unit": "ns/op",
            "extra": "2521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191666,
            "unit": "B/op",
            "extra": "2521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2521 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 4981890,
            "unit": "ns/op\t 1896312 B/op\t   48069 allocs/op",
            "extra": "235 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 4981890,
            "unit": "ns/op",
            "extra": "235 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896312,
            "unit": "B/op",
            "extra": "235 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48069,
            "unit": "allocs/op",
            "extra": "235 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 56062,
            "unit": "ns/op\t   20305 B/op\t     615 allocs/op",
            "extra": "21153 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 56062,
            "unit": "ns/op",
            "extra": "21153 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20305,
            "unit": "B/op",
            "extra": "21153 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "21153 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 552535,
            "unit": "ns/op\t  194504 B/op\t    6020 allocs/op",
            "extra": "1975 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 552535,
            "unit": "ns/op",
            "extra": "1975 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194504,
            "unit": "B/op",
            "extra": "1975 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1975 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 5798911,
            "unit": "ns/op\t 1940626 B/op\t   60581 allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5798911,
            "unit": "ns/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940626,
            "unit": "B/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60581,
            "unit": "allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 4500,
            "unit": "ns/op\t    1841 B/op\t      27 allocs/op",
            "extra": "244120 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4500,
            "unit": "ns/op",
            "extra": "244120 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1841,
            "unit": "B/op",
            "extra": "244120 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "244120 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 4996,
            "unit": "ns/op\t    1824 B/op\t      25 allocs/op",
            "extra": "229210 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 4996,
            "unit": "ns/op",
            "extra": "229210 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "229210 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "229210 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2883,
            "unit": "ns/op\t    1531 B/op\t      17 allocs/op",
            "extra": "419533 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2883,
            "unit": "ns/op",
            "extra": "419533 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1531,
            "unit": "B/op",
            "extra": "419533 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "419533 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 3890799,
            "unit": "ns/op\t 1321458 B/op\t   40091 allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3890799,
            "unit": "ns/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1321458,
            "unit": "B/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6025,
            "unit": "ns/op\t    3058 B/op\t      37 allocs/op",
            "extra": "197040 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6025,
            "unit": "ns/op",
            "extra": "197040 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3058,
            "unit": "B/op",
            "extra": "197040 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "197040 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 6751,
            "unit": "ns/op\t    2474 B/op\t      49 allocs/op",
            "extra": "175842 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6751,
            "unit": "ns/op",
            "extra": "175842 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2474,
            "unit": "B/op",
            "extra": "175842 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "175842 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4165,
            "unit": "ns/op\t    1759 B/op\t      22 allocs/op",
            "extra": "280254 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4165,
            "unit": "ns/op",
            "extra": "280254 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1759,
            "unit": "B/op",
            "extra": "280254 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "280254 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 23341,
            "unit": "ns/op\t   16737 B/op\t     164 allocs/op",
            "extra": "52237 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23341,
            "unit": "ns/op",
            "extra": "52237 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16737,
            "unit": "B/op",
            "extra": "52237 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "52237 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 69111,
            "unit": "ns/op\t   11955 B/op\t     797 allocs/op",
            "extra": "17304 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69111,
            "unit": "ns/op",
            "extra": "17304 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17304 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17304 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 735320,
            "unit": "ns/op\t  125915 B/op\t    8741 allocs/op",
            "extra": "1651 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 735320,
            "unit": "ns/op",
            "extra": "1651 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "1651 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1651 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 7941082,
            "unit": "ns/op\t 1349926 B/op\t   89741 allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 7941082,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 5891224412,
            "unit": "ns/op\t5338692408 B/op\t60948242 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5891224412,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5338692408,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948242,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 162077297,
            "unit": "ns/op\t141295537 B/op\t 1676517 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 162077297,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141295537,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676517,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 6105774177,
            "unit": "ns/op\t5480113248 B/op\t62559554 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6105774177,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5480113248,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559554,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 10408,
            "unit": "ns/op\t    7599 B/op\t     111 allocs/op",
            "extra": "114094 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10408,
            "unit": "ns/op",
            "extra": "114094 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7599,
            "unit": "B/op",
            "extra": "114094 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114094 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 498.7,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2416986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 498.7,
            "unit": "ns/op",
            "extra": "2416986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2416986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2416986 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 10379,
            "unit": "ns/op\t    7606 B/op\t     111 allocs/op",
            "extra": "116319 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10379,
            "unit": "ns/op",
            "extra": "116319 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7606,
            "unit": "B/op",
            "extra": "116319 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "116319 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "caebc401dee42fa5a1004d5a29600b343faca185",
          "message": "fix: upgrade CI Go version to 1.21",
          "timestamp": "2024-03-09T15:33:15+08:00",
          "tree_id": "ad875f1485e551085d8eece3406f91ad95137174",
          "url": "https://github.com/newwan/casbin/commit/caebc401dee42fa5a1004d5a29600b343faca185"
        },
        "date": 1710078960361,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 17.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68625394 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.54,
            "unit": "ns/op",
            "extra": "68625394 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68625394 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68625394 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 170.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6882903 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 170.5,
            "unit": "ns/op",
            "extra": "6882903 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6882903 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6882903 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 171.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7017501 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 171.2,
            "unit": "ns/op",
            "extra": "7017501 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7017501 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7017501 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 177.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6679298 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 177.2,
            "unit": "ns/op",
            "extra": "6679298 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6679298 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6679298 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6192327 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 188,
            "unit": "ns/op",
            "extra": "6192327 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6192327 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6192327 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 169.5,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "7345414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 169.5,
            "unit": "ns/op",
            "extra": "7345414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7345414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7345414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 174,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6758414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 174,
            "unit": "ns/op",
            "extra": "6758414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6758414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6758414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 183.8,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "6085873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 183.8,
            "unit": "ns/op",
            "extra": "6085873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6085873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6085873 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2732,
            "unit": "ns/op\t    1535 B/op\t      18 allocs/op",
            "extra": "420777 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2732,
            "unit": "ns/op",
            "extra": "420777 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "420777 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "420777 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 186.5,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "6396094 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 186.5,
            "unit": "ns/op",
            "extra": "6396094 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6396094 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6396094 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 175,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6985832 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 175,
            "unit": "ns/op",
            "extra": "6985832 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6985832 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6985832 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 172.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6967112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 172.1,
            "unit": "ns/op",
            "extra": "6967112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6967112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6967112 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 297.8,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "4040834 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 297.8,
            "unit": "ns/op",
            "extra": "4040834 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4040834 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4040834 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 170.2,
            "unit": "ns/op\t     106 B/op\t       4 allocs/op",
            "extra": "6405597 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 170.2,
            "unit": "ns/op",
            "extra": "6405597 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6405597 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6405597 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 461.2,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "2564790 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 461.2,
            "unit": "ns/op",
            "extra": "2564790 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2564790 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2564790 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 492.6,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "2439784 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 492.6,
            "unit": "ns/op",
            "extra": "2439784 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2439784 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2439784 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 521.6,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "2361152 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 521.6,
            "unit": "ns/op",
            "extra": "2361152 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2361152 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2361152 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 459,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "2603384 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 459,
            "unit": "ns/op",
            "extra": "2603384 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2603384 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2603384 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 613.8,
            "unit": "ns/op\t     176 B/op\t       7 allocs/op",
            "extra": "1949242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 613.8,
            "unit": "ns/op",
            "extra": "1949242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "1949242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1949242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1181,
            "unit": "ns/op\t     470 B/op\t       9 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1181,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 470,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 507.3,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "2439181 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 507.3,
            "unit": "ns/op",
            "extra": "2439181 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2439181 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2439181 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 551.6,
            "unit": "ns/op\t     176 B/op\t       7 allocs/op",
            "extra": "2093023 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 551.6,
            "unit": "ns/op",
            "extra": "2093023 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2093023 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2093023 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1252,
            "unit": "ns/op\t     292 B/op\t      13 allocs/op",
            "extra": "934266 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1252,
            "unit": "ns/op",
            "extra": "934266 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 292,
            "unit": "B/op",
            "extra": "934266 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "934266 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 17.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68486829 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.6,
            "unit": "ns/op",
            "extra": "68486829 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68486829 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68486829 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3561,
            "unit": "ns/op\t    1502 B/op\t      17 allocs/op",
            "extra": "320685 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3561,
            "unit": "ns/op",
            "extra": "320685 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1502,
            "unit": "B/op",
            "extra": "320685 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "320685 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5428,
            "unit": "ns/op\t    2055 B/op\t      35 allocs/op",
            "extra": "216645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5428,
            "unit": "ns/op",
            "extra": "216645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2055,
            "unit": "B/op",
            "extra": "216645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "216645 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 49520,
            "unit": "ns/op\t   20103 B/op\t     480 allocs/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 49520,
            "unit": "ns/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20103,
            "unit": "B/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 495597,
            "unit": "ns/op\t  191388 B/op\t    4829 allocs/op",
            "extra": "2401 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 495597,
            "unit": "ns/op",
            "extra": "2401 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191388,
            "unit": "B/op",
            "extra": "2401 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2401 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5727409,
            "unit": "ns/op\t 1901985 B/op\t   48227 allocs/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5727409,
            "unit": "ns/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901985,
            "unit": "B/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48227,
            "unit": "allocs/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 59327,
            "unit": "ns/op\t   20154 B/op\t     615 allocs/op",
            "extra": "20192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 59327,
            "unit": "ns/op",
            "extra": "20192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20154,
            "unit": "B/op",
            "extra": "20192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 571570,
            "unit": "ns/op\t  194195 B/op\t    6021 allocs/op",
            "extra": "1762 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 571570,
            "unit": "ns/op",
            "extra": "1762 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194195,
            "unit": "B/op",
            "extra": "1762 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1762 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 5919948,
            "unit": "ns/op\t 1940390 B/op\t   60598 allocs/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5919948,
            "unit": "ns/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940390,
            "unit": "B/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60598,
            "unit": "allocs/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5091,
            "unit": "ns/op\t    2720 B/op\t      28 allocs/op",
            "extra": "216874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5091,
            "unit": "ns/op",
            "extra": "216874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 2720,
            "unit": "B/op",
            "extra": "216874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "216874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 4933,
            "unit": "ns/op\t    1817 B/op\t      25 allocs/op",
            "extra": "238504 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 4933,
            "unit": "ns/op",
            "extra": "238504 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1817,
            "unit": "B/op",
            "extra": "238504 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "238504 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2689,
            "unit": "ns/op\t    1527 B/op\t      17 allocs/op",
            "extra": "431496 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2689,
            "unit": "ns/op",
            "extra": "431496 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1527,
            "unit": "B/op",
            "extra": "431496 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "431496 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 3914161,
            "unit": "ns/op\t 1316293 B/op\t   40090 allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3914161,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1316293,
            "unit": "B/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40090,
            "unit": "allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 5907,
            "unit": "ns/op\t    3054 B/op\t      37 allocs/op",
            "extra": "202052 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 5907,
            "unit": "ns/op",
            "extra": "202052 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3054,
            "unit": "B/op",
            "extra": "202052 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "202052 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 6805,
            "unit": "ns/op\t    2467 B/op\t      49 allocs/op",
            "extra": "173908 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6805,
            "unit": "ns/op",
            "extra": "173908 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2467,
            "unit": "B/op",
            "extra": "173908 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "173908 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4129,
            "unit": "ns/op\t    1754 B/op\t      22 allocs/op",
            "extra": "292272 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4129,
            "unit": "ns/op",
            "extra": "292272 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1754,
            "unit": "B/op",
            "extra": "292272 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "292272 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 22359,
            "unit": "ns/op\t   16700 B/op\t     164 allocs/op",
            "extra": "53874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 22359,
            "unit": "ns/op",
            "extra": "53874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16700,
            "unit": "B/op",
            "extra": "53874 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "53874 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 67026,
            "unit": "ns/op\t   11954 B/op\t     797 allocs/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 67026,
            "unit": "ns/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11954,
            "unit": "B/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 707012,
            "unit": "ns/op\t  125913 B/op\t    8741 allocs/op",
            "extra": "1635 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 707012,
            "unit": "ns/op",
            "extra": "1635 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125913,
            "unit": "B/op",
            "extra": "1635 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1635 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 8504064,
            "unit": "ns/op\t 1349925 B/op\t   89741 allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8504064,
            "unit": "ns/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349925,
            "unit": "B/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 5906790180,
            "unit": "ns/op\t5320912848 B/op\t60943307 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5906790180,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5320912848,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60943307,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 160767883,
            "unit": "ns/op\t140978678 B/op\t 1676350 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 160767883,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140978678,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676350,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 5963900871,
            "unit": "ns/op\t5459880024 B/op\t62554164 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 5963900871,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5459880024,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62554164,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 10301,
            "unit": "ns/op\t    7588 B/op\t     111 allocs/op",
            "extra": "122445 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10301,
            "unit": "ns/op",
            "extra": "122445 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7588,
            "unit": "B/op",
            "extra": "122445 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "122445 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 481,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2520942 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 481,
            "unit": "ns/op",
            "extra": "2520942 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2520942 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2520942 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 9970,
            "unit": "ns/op\t    7578 B/op\t     111 allocs/op",
            "extra": "115964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 9970,
            "unit": "ns/op",
            "extra": "115964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7578,
            "unit": "B/op",
            "extra": "115964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "115964 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "MuZhou233@outlook.com",
            "name": "沐",
            "username": "MuZhou233"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c52a9b5fc5b721e078f411452cb66518c31110e2",
          "message": "feat: update release CI to fix error (#1421)",
          "timestamp": "2024-07-19T00:36:08+08:00",
          "tree_id": "25c928ebf60a2b44de29d1307599706635a75458",
          "url": "https://github.com/newwan/casbin/commit/c52a9b5fc5b721e078f411452cb66518c31110e2"
        },
        "date": 1724211401974,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 17.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "134190118 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.86,
            "unit": "ns/op",
            "extra": "134190118 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "134190118 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "134190118 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 184.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12979560 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 184.9,
            "unit": "ns/op",
            "extra": "12979560 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12979560 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12979560 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 182,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13234976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 182,
            "unit": "ns/op",
            "extra": "13234976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13234976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13234976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 196.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "11950197 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 196.2,
            "unit": "ns/op",
            "extra": "11950197 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "11950197 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11950197 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 204.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "11477953 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 204.4,
            "unit": "ns/op",
            "extra": "11477953 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "11477953 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11477953 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 175.1,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "12816106 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 175.1,
            "unit": "ns/op",
            "extra": "12816106 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "12816106 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12816106 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 193.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12473848 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 193.1,
            "unit": "ns/op",
            "extra": "12473848 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12473848 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12473848 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 199.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "12162626 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 199.5,
            "unit": "ns/op",
            "extra": "12162626 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "12162626 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12162626 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2856,
            "unit": "ns/op\t    1543 B/op\t      18 allocs/op",
            "extra": "812479 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2856,
            "unit": "ns/op",
            "extra": "812479 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1543,
            "unit": "B/op",
            "extra": "812479 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "812479 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 205.4,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "11994225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 205.4,
            "unit": "ns/op",
            "extra": "11994225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "11994225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11994225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 189.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12852228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 189.1,
            "unit": "ns/op",
            "extra": "12852228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12852228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12852228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 188.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12866368 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 188.5,
            "unit": "ns/op",
            "extra": "12866368 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12866368 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12866368 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 306.7,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "7623714 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 306.7,
            "unit": "ns/op",
            "extra": "7623714 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "7623714 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7623714 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 177.2,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "13196172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 177.2,
            "unit": "ns/op",
            "extra": "13196172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "13196172 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13196172 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 528.7,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "4322434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 528.7,
            "unit": "ns/op",
            "extra": "4322434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "4322434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4322434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 574,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "4053963 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 574,
            "unit": "ns/op",
            "extra": "4053963 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "4053963 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4053963 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 588.5,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "3848802 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 588.5,
            "unit": "ns/op",
            "extra": "3848802 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "3848802 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3848802 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 524.6,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "4462498 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 524.6,
            "unit": "ns/op",
            "extra": "4462498 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4462498 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4462498 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 656.1,
            "unit": "ns/op\t     169 B/op\t       7 allocs/op",
            "extra": "3313980 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 656.1,
            "unit": "ns/op",
            "extra": "3313980 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 169,
            "unit": "B/op",
            "extra": "3313980 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3313980 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1281,
            "unit": "ns/op\t     453 B/op\t       9 allocs/op",
            "extra": "1890795 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1281,
            "unit": "ns/op",
            "extra": "1890795 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 453,
            "unit": "B/op",
            "extra": "1890795 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1890795 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 534.9,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "4424256 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 534.9,
            "unit": "ns/op",
            "extra": "4424256 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "4424256 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4424256 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 609,
            "unit": "ns/op\t     175 B/op\t       7 allocs/op",
            "extra": "3918063 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 609,
            "unit": "ns/op",
            "extra": "3918063 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 175,
            "unit": "B/op",
            "extra": "3918063 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3918063 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1428,
            "unit": "ns/op\t     283 B/op\t      12 allocs/op",
            "extra": "1825924 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1428,
            "unit": "ns/op",
            "extra": "1825924 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 283,
            "unit": "B/op",
            "extra": "1825924 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1825924 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "134659562 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 18,
            "unit": "ns/op",
            "extra": "134659562 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "134659562 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "134659562 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3590,
            "unit": "ns/op\t    1508 B/op\t      17 allocs/op",
            "extra": "663070 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3590,
            "unit": "ns/op",
            "extra": "663070 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1508,
            "unit": "B/op",
            "extra": "663070 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "663070 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5467,
            "unit": "ns/op\t    2062 B/op\t      35 allocs/op",
            "extra": "430624 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5467,
            "unit": "ns/op",
            "extra": "430624 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2062,
            "unit": "B/op",
            "extra": "430624 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "430624 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 53143,
            "unit": "ns/op\t   20288 B/op\t     480 allocs/op",
            "extra": "46032 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 53143,
            "unit": "ns/op",
            "extra": "46032 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20288,
            "unit": "B/op",
            "extra": "46032 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "46032 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 531554,
            "unit": "ns/op\t  191719 B/op\t    4828 allocs/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 531554,
            "unit": "ns/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191719,
            "unit": "B/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5726140,
            "unit": "ns/op\t 1898312 B/op\t   48138 allocs/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5726140,
            "unit": "ns/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1898312,
            "unit": "B/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48138,
            "unit": "allocs/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 62368,
            "unit": "ns/op\t   20391 B/op\t     615 allocs/op",
            "extra": "37374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 62368,
            "unit": "ns/op",
            "extra": "37374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20391,
            "unit": "B/op",
            "extra": "37374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "37374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 588036,
            "unit": "ns/op\t  194611 B/op\t    6018 allocs/op",
            "extra": "3804 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 588036,
            "unit": "ns/op",
            "extra": "3804 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194611,
            "unit": "B/op",
            "extra": "3804 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6018,
            "unit": "allocs/op",
            "extra": "3804 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 5963567,
            "unit": "ns/op\t 1933198 B/op\t   60309 allocs/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5963567,
            "unit": "ns/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1933198,
            "unit": "B/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60309,
            "unit": "allocs/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5216,
            "unit": "ns/op\t    2733 B/op\t      28 allocs/op",
            "extra": "426265 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5216,
            "unit": "ns/op",
            "extra": "426265 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 2733,
            "unit": "B/op",
            "extra": "426265 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "426265 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 5088,
            "unit": "ns/op\t    1828 B/op\t      25 allocs/op",
            "extra": "470208 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5088,
            "unit": "ns/op",
            "extra": "470208 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1828,
            "unit": "B/op",
            "extra": "470208 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "470208 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2791,
            "unit": "ns/op\t    1535 B/op\t      17 allocs/op",
            "extra": "828988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2791,
            "unit": "ns/op",
            "extra": "828988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "828988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "828988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4086057,
            "unit": "ns/op\t 1328736 B/op\t   40092 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 4086057,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1328736,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6179,
            "unit": "ns/op\t    3064 B/op\t      37 allocs/op",
            "extra": "390058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6179,
            "unit": "ns/op",
            "extra": "390058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3064,
            "unit": "B/op",
            "extra": "390058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "390058 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 7093,
            "unit": "ns/op\t    2481 B/op\t      49 allocs/op",
            "extra": "344990 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7093,
            "unit": "ns/op",
            "extra": "344990 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2481,
            "unit": "B/op",
            "extra": "344990 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "344990 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4163,
            "unit": "ns/op\t    1762 B/op\t      22 allocs/op",
            "extra": "566199 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4163,
            "unit": "ns/op",
            "extra": "566199 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1762,
            "unit": "B/op",
            "extra": "566199 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "566199 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 24136,
            "unit": "ns/op\t   16731 B/op\t     164 allocs/op",
            "extra": "96710 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 24136,
            "unit": "ns/op",
            "extra": "96710 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16731,
            "unit": "B/op",
            "extra": "96710 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "96710 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 74481,
            "unit": "ns/op\t   11955 B/op\t     797 allocs/op",
            "extra": "32949 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 74481,
            "unit": "ns/op",
            "extra": "32949 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "32949 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "32949 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 745921,
            "unit": "ns/op\t  125915 B/op\t    8741 allocs/op",
            "extra": "3240 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 745921,
            "unit": "ns/op",
            "extra": "3240 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "3240 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "3240 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 8377677,
            "unit": "ns/op\t 1349923 B/op\t   89741 allocs/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8377677,
            "unit": "ns/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 6224584275,
            "unit": "ns/op\t5346846712 B/op\t60949762 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6224584275,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5346846712,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60949762,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 169757617,
            "unit": "ns/op\t141553084 B/op\t 1676492 allocs/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 169757617,
            "unit": "ns/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141553084,
            "unit": "B/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676492,
            "unit": "allocs/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 6454236744,
            "unit": "ns/op\t5486234952 B/op\t62560578 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6454236744,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5486234952,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62560578,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 10708,
            "unit": "ns/op\t    7616 B/op\t     111 allocs/op",
            "extra": "227442 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10708,
            "unit": "ns/op",
            "extra": "227442 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7616,
            "unit": "B/op",
            "extra": "227442 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "227442 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 489.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "4910348 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 489.8,
            "unit": "ns/op",
            "extra": "4910348 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "4910348 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4910348 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 10621,
            "unit": "ns/op\t    7606 B/op\t     111 allocs/op",
            "extra": "229357 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10621,
            "unit": "ns/op",
            "extra": "229357 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7606,
            "unit": "B/op",
            "extra": "229357 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "229357 times\n4 procs"
          }
        ]
      }
    ]
  }
}