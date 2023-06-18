window.BENCHMARK_DATA = {
  "lastUpdate": 1687063139036,
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
      }
    ]
  }
}