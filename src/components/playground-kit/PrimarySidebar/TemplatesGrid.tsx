export function TemplatesGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginTop: 4,
      }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Tasks Tracker"
        style={{
          borderRadius: 12,
          background: "rgba(123, 183, 129, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(123, 183, 129, 0.27)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(28, 56, 41)",
              }}
            >
              <div className="text-sm font-medium">Tasks Tracker</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(28, 56, 41)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Stay organized with tasks, your way.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div className="text-xs">Tasks Tracker</div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      gridTemplateRows: "repeat(4, 20px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Task name
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Status
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Assignee
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(29, 27, 22)",
                            background: "rgba(84, 72, 49, 0.15)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(71, 70, 68, 0.6)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Not started
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-1.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "60%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(24, 51, 71)",
                            background: "rgba(93, 165, 206, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(54, 129, 177, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              In progress
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-2.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(28, 56, 41)",
                            background: "rgba(123, 183, 129, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(66, 133, 90, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Done
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-3.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Projects"
        style={{
          borderRadius: 12,
          background: "rgba(91, 166, 209, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(93, 165, 206, 0.27)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(24, 51, 71)",
              }}
            >
              <div className="text-sm font-medium">Projects</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(24, 51, 71)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Manage projects start to finish.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div className="text-xs">Projects</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingLeft: 4,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 6,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(29, 27, 22)",
                            background: "rgba(84, 72, 49, 0.15)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(71, 70, 68, 0.6)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Not started
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(24, 51, 71)",
                            background: "rgba(93, 165, 206, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(54, 129, 177, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              In progress
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(28, 56, 41)",
                            background: "rgba(123, 183, 129, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(66, 133, 90, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Done
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 6,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: 4,
                            padding: 6,
                            borderRadius: 4,
                            border: "0.5px solid rgba(84, 72, 49, 0.08)",
                          }}
                        >
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: 4,
                            padding: 6,
                            borderRadius: 4,
                            border: "0.5px solid rgba(84, 72, 49, 0.08)",
                            height: 30,
                          }}
                        >
                          <div
                            style={{
                              width: "80%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: 4,
                            padding: 6,
                            borderRadius: 4,
                            border: "0.5px solid rgba(84, 72, 49, 0.08)",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: 4,
                            padding: 6,
                            borderRadius: 4,
                            border: "0.5px solid rgba(84, 72, 49, 0.08)",
                          }}
                        >
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: 4,
                            padding: 6,
                            borderRadius: 4,
                            border: "0.5px solid rgba(84, 72, 49, 0.08)",
                          }}
                        >
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Document Hub"
        style={{
          borderRadius: 12,
          background: "rgba(243, 136, 118, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(244, 171, 159, 0.4)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(93, 23, 21)",
              }}
            >
              <div className="text-sm font-medium">Document Hub</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(93, 23, 21)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Collaborate on docs in one hub.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div className="text-xs">Document Hub</div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      gridTemplateRows: "repeat(4, 20px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Doc name
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Created by
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Created time
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-3.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-1.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "60%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-2.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Brainstorm Session"
        style={{
          borderRadius: 12,
          background: "rgba(224, 124, 57, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(224, 124, 57, 0.27)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(73, 41, 14)",
              }}
            >
              <div className="text-sm font-medium">Brainstorm Session</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(73, 41, 14)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Spark new ideas together.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        flexShrink: 0,
                        transform: "scale(1.2)",
                        mask: 'url("/icons/light-bulb_orange.svg?mode=light") center center no-repeat',
                        backgroundColor: "rgb(217, 115, 13)",
                        fill: "rgb(217, 115, 13)",
                      }}
                    />
                    <div className="text-xs">Brainstorm Session</div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      gridTemplateRows: "repeat(4, 20px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Idea
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Created by
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Priority
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-1.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(93, 23, 21)",
                            background: "rgba(244, 171, 159, 0.4)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              High
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "60%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-2.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(64, 44, 27)",
                            background: "rgba(236, 191, 66, 0.39)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Medium
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-3.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(28, 56, 41)",
                            background: "rgba(123, 183, 129, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Low
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Meeting Notes"
        style={{
          borderRadius: 12,
          background: "rgba(215, 177, 24, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(236, 191, 66, 0.39)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(64, 44, 27)",
              }}
            >
              <div className="text-sm font-medium">Meeting Notes</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(64, 44, 27)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Turn meetings into action.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        flexShrink: 0,
                        transform: "scale(1.2)",
                        mask: 'url("/icons/calendar_yellow.svg?mode=light") center center no-repeat',
                        backgroundColor: "rgb(203, 145, 47)",
                        fill: "rgb(203, 145, 47)",
                      }}
                    />
                    <div className="text-xs">Meeting Notes</div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      gridTemplateRows: "repeat(4, 20px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Meeting name
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Date
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Category
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "60%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(93, 23, 21)",
                            background: "rgba(244, 171, 159, 0.4)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Standup
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(64, 44, 27)",
                            background: "rgba(236, 191, 66, 0.39)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Presentation
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "70%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 3,
                            paddingLeft: 4,
                            paddingRight: 4,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(24, 51, 71)",
                            background: "rgba(93, 165, 206, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Planning
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Goals Tracker"
        style={{
          borderRadius: 12,
          background: "rgba(91, 166, 209, 0.07)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            userSelect: "none",
            transition: "background 20ms ease-in",
            cursor: "pointer",
            borderRadius: 12,
            border: "0.5px solid rgba(93, 165, 206, 0.27)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="autolayout-col autolayout-fill-width autolayout-fill-height autolayout-space">
            <div
              style={{
                padding: "20px 20px 10px",
                color: "rgb(24, 51, 71)",
              }}
            >
              <div className="text-sm font-medium">Goals Tracker</div>
              <div
                className="text-xs"
                style={{
                  color: "rgb(24, 51, 71)",
                  marginTop: 2,
                  opacity: "0.6",
                  textWrap: "balance",
                }}
              >
                Set team goals, achieve together.
              </div>
            </div>
            <div
              style={{
                overflow: "visible",
                position: "relative",
                height: 108,
                width: "calc(100% - 22px)",
                marginLeft: 22,
                marginTop: "-4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transition: "top 0.2s",
                  width: "100%",
                  height: "100%",
                  marginTop: 4,
                  lineHeight: 0,
                  borderRadius: "6px 0px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow:
                    "rgba(84, 72, 49, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 12px 32px -6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 12,
                    paddingLeft: 12,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginLeft: 4,
                    }}
                  >
                    <div className="text-xs">Goals Tracker</div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      gridTemplateRows: "repeat(4, 20px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Goal name
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Owner
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "rgb(120, 119, 116)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Status
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-3.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(28, 56, 41)",
                            background: "rgba(123, 183, 129, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(66, 133, 90, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Done
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "65%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-1.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "65%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(29, 27, 22)",
                            background: "rgba(84, 72, 49, 0.15)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(71, 70, 68, 0.6)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Not started
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "60%",
                            height: 5,
                            backgroundColor: "rgba(84, 72, 49, 0.08)",
                            borderRadius: 6,
                            maxWidth: "80%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 12,
                              height: 12,
                              boxSizing: "content-box",
                              borderRadius: "100%",
                              overflow: "hidden",
                              border: "0.5px solid rgba(84, 72, 49, 0.08)",
                              flexShrink: 0,
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                alt=""
                                src="/images/workflow-templates/preview-avatar-2.png"
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: 5,
                              backgroundColor: "rgba(84, 72, 49, 0.08)",
                              borderRadius: 6,
                              maxWidth: "80%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: "-1px",
                        borderBottom: "1px solid rgba(84, 72, 49, 0.08)",
                        paddingLeft: 4,
                        paddingRight: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 12,
                            margin: 0,
                            borderRadius: 6,
                            paddingLeft: 5,
                            paddingRight: 7,
                            lineHeight: "120%",
                            fontSize: 8,
                            color: "rgb(24, 51, 71)",
                            background: "rgba(93, 165, 206, 0.27)",
                          }}
                        >
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "inline-flex",
                              alignItems: "center",
                              height: 12,
                              lineHeight: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: 2,
                                  borderRadius: 99,
                                  height: 5,
                                  width: 5,
                                  backgroundColor: "rgba(54, 129, 177, 0.82)",
                                  display: "inline-flex",
                                  flexShrink: 0,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              In progress
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
